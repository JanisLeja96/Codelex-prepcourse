/**
 * Vowels
 *
 * Write a function which returns number of vowels in given string.
 *
 * Examples:
 * vowels('aeiou') === 5
 * vowels('Adam') === 2
 * vowels('Hello there!') === 4
 */

function vowels(s: string) {
    let vowels: string[] = ['a', 'e', 'i', 'u', 'o'];
    let count: number = 0;

    for (let i = 0; i < s.length; i++) {
        for (let j = 0; j < vowels.length; j++) {
            if (s.charAt(i).toLowerCase() == vowels[j]) {
                count++;
                break;
            }
        }
    }
    return count;
}

export { vowels };
