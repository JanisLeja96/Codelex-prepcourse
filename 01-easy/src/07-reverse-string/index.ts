/**
 * Reverse String
 *
 * For given string return a new string
 * with the reversed order of characters.
 *
 * Examples:
 * reverse('apple') === 'elppa'
 * reverse('hello') === 'olleh'
 * reverse('Greetings!') === '!sgniteerG'
 */

function reverse(str: string) {
    let reversed: string[] = [];

    for (let i = str.length - 1; i >= 0; i--) {
        reversed.push(str.charAt(i));
    }
    return reversed.join('');
}

export { reverse };
