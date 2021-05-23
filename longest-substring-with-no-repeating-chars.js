/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    let bestRunMaxChars = 0;
    let bestRun = [];
    let currentRun = [];
    let charsInString = s.split('');

    for (let i = 0; i < charsInString.length; i++) {
        for (let j = 0; j < charsInString.length; j++) {
            let currentChar = charsInString[i+j];
            if (currentChar && currentRun.indexOf(currentChar) === -1) {
                currentRun.push(currentChar);
                if (bestRunMaxChars < currentRun.length) {
                    //new leader
                    bestRunMaxChars = currentRun.length;
                    bestRun = currentRun;
                }
            } else {
                break;
            }
        }
        currentRun = [];
    }

    // return bestRun.join('');
    return bestRunMaxChars;
};


let result;
result = lengthOfLongestSubstring('abcabcbb');
if (result !== 'abc') {
    console.log('failed test 1 with result: ' + result);
}

result = lengthOfLongestSubstring('bbbbb');
if (result !== 'b') {
    console.log('failed test 2 with result: ' + result);
}

result = lengthOfLongestSubstring('pwwkew');
if (result !== 'wke') {
    console.log('failed test 3 with result: ' + result);
}

result = lengthOfLongestSubstring('dvdf');
if (result !== 'vdf') {
    console.log('failed test 4 with result: ' + result);
}
