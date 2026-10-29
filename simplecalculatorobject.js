// A simple calculator object with basic arithmetic operations
const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      return "Error: Division by zero";
    }
    return a / b;
  },
};

// Example usage:
console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("4 * 5 =", calculator.multiply(4, 5));
console.log("20 / 4 =", calculator.divide(20, 4));
