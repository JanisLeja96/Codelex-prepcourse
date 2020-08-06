/**
 * Reverse Integer
 *
 * For given integer return an integer that is the reverse
 * ordering of numbers.
 *
 * Examples:
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverse(int: number) {
    let numStr: string = int.toString();
    let numArr: Array<string> = new Array(numStr.length);

    for (let i = 0; i < numArr.length; i++) {
        numArr[i] = numStr.charAt(numStr.length - 1 - i);
    }

    if (numArr[numArr.length - 1] == '-') {
        numArr.pop();
        numArr.unshift('-');
    }
    numStr = numArr.join('');
    return parseInt(numStr);

}

export { reverse };
