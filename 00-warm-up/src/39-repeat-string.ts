export {};

const repeatString = (string, num) => {
    let result = '';
    for (let i = 0; i < num; i++) {
        result = result.concat(string);
    }
    return result;
};

console.log(repeatString("a", 4)); // Expected output: 'aaaa'
console.log(repeatString("b", 5)); // Expected output: 'bbbbb'
