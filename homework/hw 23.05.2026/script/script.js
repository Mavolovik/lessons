const numbers = [-3, 16, 8, -34, 65, 120, 42, 15, 7, -4, -7, 3, 46, 26, 83];
const singleDigitNumbers = numbers.filter(num => num > 0 && num < 10);
singleDigitNumbers.sort((a, b) => a - b);
console.log(singleDigitNumbers);