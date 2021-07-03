/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    if (!strs.length){
        return ''
    }

    let longestPrefix = '';
    let allShareSamePrefix = true;
    let pointer = 0;
    while (allShareSamePrefix) {
        let currentLetter = strs[0].charAt(pointer);
        for (str of strs) {
            if (str.length === 0 || str.charAt(pointer) === '' || str.charAt(pointer) !== currentLetter){
                allShareSamePrefix = false;
                break;
            }
        }
        if (allShareSamePrefix) {
            longestPrefix += str.charAt(pointer);
        }
        pointer++;
    }
    return longestPrefix;
};

let expected, actual, strs;


strs = ['flower', 'flow', 'flight'];
expected = 'fl';
actual = longestCommonPrefix(strs);
if (actual !== expected) {
    console.log('actual: ' + JSON.stringify(actual));
    console.log('expected: ' + JSON.stringify(expected));
    console.log('failed test 1');
}


strs = [''];
expected = '';
actual = longestCommonPrefix(strs);
if (actual !== expected) {
    console.log('actual: ' + JSON.stringify(actual));
    console.log('expected: ' + JSON.stringify(expected));
    console.log('failed test 2');
}


strs = ['a'];
expected = 'a';
actual = longestCommonPrefix(strs);
if (actual !== expected) {
    console.log('actual: ' + JSON.stringify(actual));
    console.log('expected: ' + JSON.stringify(expected));
    console.log('failed test 3');
}
