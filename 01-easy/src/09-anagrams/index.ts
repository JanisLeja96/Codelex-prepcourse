/**
 * Anagrams
 *
 * Return true of false depends on provided strings are anagrams of eachother.
 * One string is an anagram of another if it uses the same characters
 * in the same quantity. Only consider characters, not spaces
 * or punctuation. Consider capital letters to be the same as lower case.
 *
 * Examples:
 * anagrams('rail safety', 'fairy tales') === true
 * anagrams('RAIL! SAFETY!', 'fairy tales') === true
 * anagrams('Hi there', 'Bye there') === false
 */
interface counts {
    [word: string] : number;
}

function anagrams(stringA: string, stringB: string) {
    stringA = stringA.replace(/[^A-Za-z]/g, '').toLowerCase();
    stringB = stringB.replace(/[^A-Za-z]/g, '').toLowerCase();

    if (stringA.length != stringB.length) return false;

    let countsA: counts = {};
    let countsB: counts = {};
    
    for (let i = 0; i < stringA.length; i++) {
        if (countsA[stringA.charAt(i)]) countsA[stringA.charAt(i)]++;
        else countsA[stringA.charAt(i)] = 1;
    }
    for (let i = 0; i < stringB.length; i++) {
        if (countsB[stringB.charAt(i)]) countsB[stringB.charAt(i)]++;
        else countsB[stringB.charAt(i)] = 1;
    }

    for (let i = 0; i < stringA.length; i++) {
        if (countsA[stringA.charAt(i)] != countsB[stringA.charAt(i)]) return false;
    }
    return true;
}

export { anagrams };
