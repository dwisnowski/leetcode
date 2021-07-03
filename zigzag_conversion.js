/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    if (numRows === 1) {
        return s;
    }

    let chars = s.split('');
    let resultRows = new Array(numRows).fill().map(() => {
        return new Array();
    });

    let row = 0;
    let direction = 1;
    while (chars.length) {
        resultRows[row].push(chars.splice(0, 1)[0]);
        row = row + direction;
        if (row === numRows || row === -1) {
            direction *= -1;
            row = row + 2 * direction;
        }
    }
    return resultRows.map((row) => {
        return row.join('');
    }).join('');
};

let expected, actual, s, numRows;


s = 'PAYPALISHIRING';
numRows = 3;
expected = 'PAHNAPLSIIGYIR';
actual = convert(s, numRows);
if (actual !== expected) {
    console.log('actual: ' + JSON.stringify(actual));
    console.log('expected: ' + JSON.stringify(expected));
    console.log('failed test 1');
}

s = 'AB';
numRows = 1;
expected = 'AB';
actual = convert(s, numRows);
if (actual !== expected) {
    console.log('actual: ' + JSON.stringify(actual));
    console.log('expected: ' + JSON.stringify(expected));
    console.log('failed test 2');
}

