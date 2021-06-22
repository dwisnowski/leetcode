// You are given a string num, representing a large integer. Return the largest-valued odd integer (as a string) that is a non-empty substring of num, or an empty string "" if no odd integer exists.
//     A substring is a contiguous sequence of characters within a string.

/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function (num) {
    // find first odd value and prepend all the left values of it.
    // remove leading zeros??
    // read right to left
    let maxString, found1sPosition;

    found1sPosition = -1;
    maxString = '';

    for (let i = num.length; i >= 0; i--) {
        if (num[i] % 2 === 1) {
            //odd
            found1sPosition = i;
            break;
        }
    }

    if (found1sPosition < 0) {
        return maxString;
    }

    maxString = num.slice(0, found1sPosition + 1);

    while (maxString[0] === '0') {
        maxString.shift();
    }

    return maxString;
};


let expected, actual, num;

num = '52';
expected = '5';
actual = largestOddNumber(num);
if (actual !== expected) {
    console.log('actual: ' + actual);
    console.log('expected: ' + expected);
    console.log('failed test 1');
}

num = '4206';
expected = '';
actual = largestOddNumber(num);
if (actual !== expected) {
    console.log('actual: ' + actual);
    console.log('expected: ' + expected);
    console.log('failed test 2');
}

num = '35427';
expected = '35427';
actual = largestOddNumber(num);
if (actual !== expected) {
    console.log('actual: ' + actual);
    console.log('expected: ' + expected);
    console.log('failed test 3');
}
