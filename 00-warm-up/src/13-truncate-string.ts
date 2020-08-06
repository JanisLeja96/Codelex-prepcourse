export {};

const truncateString = (string, n) => {
    return string.substring(0, n);
}

console.log(truncateString("CODELEX", 4)); // Expected output: CODE
