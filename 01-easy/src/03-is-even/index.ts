/**
 * Is Even
 *
 * Determine if given number is even
 * without using a mathematic operator ( +, -, %, /, Math, ParseInt etc.)
 * nor a conditional operator.
 *
 * Examples:
 * isEven(4) === true
 * isEven(3) === false
 */

function isEven(n: number) {
    let strings = n.toString();
    const oddNumbers: string[] = ['1', '3', '5', '7', '9'];
    let indexOfDot = strings.indexOf('.');
    if (indexOfDot != -1) {
        strings = strings.slice(0, indexOfDot);
    }
    let lastDigit = strings.charAt(strings.length - 1);

    return !oddNumbers.includes(lastDigit);
}

export { isEven };
