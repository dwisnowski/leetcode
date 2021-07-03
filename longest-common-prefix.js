function longestCommonPrefix(strs) {
    if (strs == null || strs.length == 0) return "";
    for (let i = 0; i < strs[0].length ; i++){
        let c = strs[0].charAt(i);
        for (let j = 1; j < strs.length; j ++) {
            if (i == strs[j].length || strs[j].charAt(i) != c)
                return strs[0].slice(0, i);             
        }
    }
    return strs[0];
}


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
