/**
 * @param {string[]} strs
 * @return {string}
 */
function getLongestPrefix(word1, word2){
    let pointer = 0;
    let prefix = '';
    while (word1.charAt(pointer) && word2.charAt(pointer) && word1.charAt(pointer) === word2.charAt(pointer)){
        prefix += word1.charAt(pointer);
        pointer++;
    }
    return prefix;
}

var longestCommonPrefix = function (strs) {
    return strs.reduce((accum, str, index)=> {
        return getLongestPrefix(str, accum);
    }, strs[0]);
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
