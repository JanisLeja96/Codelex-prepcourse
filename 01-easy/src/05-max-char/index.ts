/**
 * Max Char
 *
 * For given string return the character that is most
 * commonly used in the string.
 *
 * Examples:
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */
interface counts {
    [key: string]: number;
}
function maxChar(str: string) {
    let elements: counts = {};

    for (let i = 0; i < str.length; i++) {
        if (elements[str.charAt(i)]) elements[str.charAt(i)]++;
        else elements[str.charAt(i)] = 1;
    }
    let mostTimes: number = -1;
    let letter: string = '';

    for (let key in elements) {
        if (elements[key] > mostTimes) {
            mostTimes = elements[key];
            letter = key;
        }
    }
    return letter;

    
}

export { maxChar };
