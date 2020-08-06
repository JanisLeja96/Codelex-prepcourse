export {};

function goThroughNumbers(start, end) {
    const numbers = [];

    for (let i = start; i <= end; i++) {
        numbers[i] = i;
    };

    numbers.map(num => {
        num += start;
    });
    numbers.forEach(number => {
        if (number % 2 === 0) console.log(`${number} - even`);
        else console.log(`${number} - odd`);
    });
}

goThroughNumbers(3, 7);
/* Expected output:

    > 3 - odd
    > 4 - even
    > 5 - odd
    > 6 - even
    > 7 - odd

*/

goThroughNumbers(8, 12);
/* Expected output:

    > 8 - even
    > 9 - odd
    > 10 - even
    > 11 - odd
    > 12 - even

*/

goThroughNumbers(4, 3);
// Expected output: 'invalid input'
