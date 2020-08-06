export {};

function add(num1, num2) {return num1+num2;}

function subtract(num1, num2) {return num1 - num2;}

function sum(numbers) {
    let sum = 0;
    numbers.forEach(num => sum += num);
    return sum;
}

function multiply(numbers) {
    let result = 1;
    numbers.forEach(num => result *= num);
    return result;
}

function power(num1, num2) {return Math.pow(2,3);}

console.log(add(1, 2)); // Expected output: 3
console.log(subtract(1, 2)); // Expected output: -1
console.log(sum([1, 2, 3])); // Expected output: 6
console.log(multiply([1, 2, 3])); // Expected output: 6
console.log(power(2, 3)); // Expected output: 8
