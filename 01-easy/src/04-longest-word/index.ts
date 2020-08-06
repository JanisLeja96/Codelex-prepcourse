/**
 * Longest Word
 *
 * Write a function that returns the longest word in the passed sentence.
 * If there are two or more words that are the same length, return
 * the first word from the string with that length. Ignore punctuation
 * and assume sentence will not be empty.
 *
 * Examples:
 * longestWord("Hello there") === "Hello"
 * longestWord("My name is Adam") === "name"
 * longestWord("fun&!! time") === "time"
 */

function longestWord(sen: string) {
    let words: Array<string> = sen.replace(/[^A-Za-z\s]/g, '').split(' ');

    let longestLength: number = -1;
    let longestWord: string = '';

    for (let word of words) {
        if (word.length > longestLength) {
            longestLength = word.length;
        }
    }

    for (let word of words) {
        if (word.length === longestLength) {
            longestWord = word;
            break;
        }
    }

    return longestWord;
}
export { longestWord };
