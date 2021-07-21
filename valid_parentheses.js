/**
 * @param {string} s
 * @return {boolean}
 */

const openingBrackets = ['(','[','{'];
const bracketMatches = {
    '(': ')',
    '[': ']',
    '{': '}',
    ')': '(',
    ']': '[',
    '}': '{'
}
var isValid = function(s) {
    let stack = [];
    let brackets = s.split('');
    for (let i = 0; i < brackets.length; i++) {
        let char = brackets[i];
        if (openingBrackets.includes(char)){
            stack.push(char);
        }else {
            let lastBracket = stack.pop();
            let charNeedsToBeThisBracketOrElse = bracketMatches[lastBracket];
            if (char === charNeedsToBeThisBracketOrElse) {
                //valid
            }else {
                return false;
            }
        }
    };
    
    if (stack.length > 0) {
        return false;
    }
    
    return true;
};
