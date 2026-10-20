class ShoppingCart {
  constructor() {
    this.items = [];
    this.discountRate = 0;
  }

  addItem(product, price, quantity = 1) {
    const existingItem = this.items.find((item) => item.product === product);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      this.items.push({ product, price, quantity });
    }
  }

  removeItem(product) {
    const index = this.items.findIndex((item) => item.product === product);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  }

  updateQuantity(product, quantity) {
    const item = this.items.find((item) => item.product === product);
    if (item) {
      if (quantity <= 0) {
        this.removeItem(product);
      } else {
        item.quantity = quantity;
      }
    }
  }

  applyDiscount(rate) {
    if (rate >= 0 && rate <= 1) {
      this.discountRate = rate;
    }
  }

  getSubtotal() {
    return this.items.reduce(
      (total, item) => total + item.price * item.quantity,
      0,
    );
  }

  getTotal() {
    const subtotal = this.getSubtotal();
    return subtotal - subtotal * this.discountRate;
  }

  clear() {
    this.items = [];
    this.discountRate = 0;
  }
}
