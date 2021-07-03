function printStraightDown(row, column, matrix, chars) {
    while (row < matrix.length && chars.length) {
        matrix[row][column] = chars.splice(0, 1)[0];
        row++;
    }
    row--; //last inc doesnt count;
    return [row, column];
}

function printZiggingUp(row, column, matrix, chars) {
    row = row - 1 < 0 ? 0 : row - 1;
    column++;
    while (row > 0 && column < matrix[0].length && chars.length) {
        matrix[row][column] = chars.splice(0, 1)[0];
        row--;
        column++;
    }
    return [row, column];
}

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    let chars = s.split('');
    let matrix = new Array(numRows).fill().map(() => new Array(s.length).fill(''));

    let row = 0;
    let column = 0;

    while (chars.length) {
        ([row, column] = printStraightDown(row, column, matrix, chars));
        ([row, column] = printZiggingUp(row, column, matrix, chars));
    }

    return matrix.map((row) => {
        return row.filter((char) => {
            return char !== '';
        }).join('');
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

