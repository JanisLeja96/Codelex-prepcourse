export {};

const stringToArray = (string) => {
    let strArr = [];
    for (let str of string) {
        let words = str.split(' ');
        for (let word of words) {
            strArr.push(word);
        }
    }
    return strArr;
}
console.log(stringToArray(["John Doe"])); // Expected output: ['John', 'Doe']
