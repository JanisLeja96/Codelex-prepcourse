/**
 * Steps
 *
 * Write a function that accepts a positive number N.
 * The function should prints a step shape
 * with N levels using the '#' character.
 *
 * Examples:
 * steps(2) = '# '
 *            '##'
 *
 * steps(3) = '#  '
 *            '## '
 *            '###'
 *
 * steps(4) = '#   '
 *            '##  '
 *            '### '
 *            '####'
 */
interface stairs {
    [key: number] : number;
}

function steps(n: number) {
    let elems: stairs = {};
    
    for (let i = 0; i < n; i++) {
        for (let j = i; j <= i; j++) {
            elems[i][j] = '#';
        }
    }
    return elems;
}
//console.log(steps(4));
export { steps };
