export {};

const removeFromArray = function(arr, ...num) {
    num.forEach(number => {
        if (arr.includes(number)) {
            arr.splice(arr.indexOf(number), 1);
        }
    });
    return arr;
};

console.log(removeFromArray([1, 2, 3, 4], 3)); // Expected output: [1, 2, 4]
console.log(removeFromArray([1, 2, 3, 4], 7)); // Expected output: [1, 2, 3, 4]
console.log(removeFromArray([1, 2, 3, 4], 7, 2)); // Expected output: [1, 3, 4]
