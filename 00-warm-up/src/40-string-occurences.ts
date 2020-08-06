export {};

const count = (string, key) => {
    let occur = 0;
    let strArr = string.split(' ');
    strArr.forEach(word => {
        if (word.toUpperCase() === key.toUpperCase()) occur++;
    });
    return occur;
};

console.log(count("The quick brown fox jumps over the lazy dog", "the")); // Expected output: 2
console.log(count("The quick brown fox jumps over the lazy dog", "fox")); // Expected output: 1
