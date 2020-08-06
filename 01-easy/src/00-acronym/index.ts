/**
 * Convert a phrase to its acronym.
 *
 * Techies love their TLA (Three Letter Acronyms)!
 *
 * Help generate some jargon by writing a program that converts a long name like Portable Network Graphics to its acronym (PNG).
 */

function parse(input: string) {
    input = input.replace('-', ' ').replace('_', ' ');
    let words: string[] = input.split(' ');
    let acronym: string = '';

    words = words.filter(word => word != '-');

    words.forEach(word => {
        acronym = acronym.concat(word.toUpperCase().charAt(0));
    });
    return acronym;
}

export { parse };
