// Reference: these are likely already defined above your Task 1 comment
// const tax = 1.10; // example — use whatever value is already in your file
// const dishData = [
//   { name: "Greek Salad", price: 12.99 },
//   { name: "Bruschetta", price: 7.99 },
//   { name: "Grilled Fish", price: 20.00 },
//   { name: "Pasta", price: 15.50 },
//   { name: "Lemon Dessert", price: 6.00 }
// ];

// Task 1
function getPrices(taxBoolean) {
  for (const dish of dishData) {
    let finalPrice;

    if (taxBoolean === true) {
      finalPrice = dish.price * tax;
    } else if (taxBoolean === false) {
      finalPrice = dish.price;
    } else {
      console.log("You need to pass a boolean to the getPrices call!");
      return;
    }

    console.log(`Dish: ${dish.name} Price: $${finalPrice}`);
  }
}

// Task 2
function getDiscount(taxBoolean, guests) {
  getPrices(taxBoolean);

  if (typeof guests === "number" && guests > 0 && guests < 30) {
    let discount;

    if (guests < 5) {
      discount = 5;
    } else {
      discount = 10;
    }

    console.log(`Discount is: $${discount}`);
  } else {
    console.log("The second argument must be a number between 0 and 30");
  }
}

// Task 3
getDiscount(true, 2);
getDiscount(false, 10);
