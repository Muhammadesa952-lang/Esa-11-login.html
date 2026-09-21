// Practice Focus: Variables, Functions, Math

// 1. Function to calculate tip based on bill amount
function calculateTip(billTotal, tipPercentage) {
  if (billTotal <= 0 || tipPercentage < 0) {
    return "Please enter valid positive numbers.";
  }
  const tipAmount = (billTotal * tipPercentage) / 100;
  const grandTotal = billTotal + tipAmount;

  return {
    tip: tipAmount.toFixed(2),
    total: grandTotal.toFixed(2),
  };
}

// 2. Function to check if a word is a palindrome
function isPalindrome(str) {
  const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  const reversedStr = cleanedStr.split("").reverse().join("");
  return cleanedStr === reversedStr;
}

// Tests
console.log("Tip Calculator Result:", calculateTip(50, 18));
console.log("Is 'racecar' a palindrome?:", isPalindrome("racecar"));
console.log("Is 'hello' a palindrome?:", isPalindrome("hello"));
