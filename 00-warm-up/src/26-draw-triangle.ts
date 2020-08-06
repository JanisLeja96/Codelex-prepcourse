export {};

function draw(size) {
    console.log('');
    let drawing = '';
    for (let i = 0; i < size; i++) {
        for (let j = 0; j <= i; j++) {
            drawing = drawing.concat('*');
        }
        drawing = drawing.concat('\n');
    }
    console.log(drawing);
}

draw(3);
/* Expected output:

    *
    **
    ***

*/

draw(5);
/* Expected output:

    *
    **
    ***
    ****
    *****

*/
