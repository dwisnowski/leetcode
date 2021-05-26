//https://leetcode.com/problems/longest-palindromic-substring/

function isPalindrome(charArray) {
    return charArray.join('') === charArray.reverse().join('');
}

/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    let allCharsInString = s.split('');
    let foundPalindromes = [];

    if (isPalindrome(allCharsInString)) {
        return s;
    }

    for (let i = 0; i < allCharsInString.length; i++) {
        for (let j = allCharsInString.length; i < j; j--) {
            let testArray = allCharsInString.slice(i, j);
            if (isPalindrome(testArray)) {
                foundPalindromes.push(testArray);
            }
        }
    }

    if (foundPalindromes.length > 0) {
        let sortedPalindromesByLength = foundPalindromes.sort((a, b) => {
            return b.length - a.length;
        });

        return sortedPalindromesByLength[0].join('');
    } else {
        return false;
    }
};


let result;

result = longestPalindrome('babad');
if (result !== 'bab' && result !== 'aba') {
    console.log('failed test 1, ' + result);
}

result = longestPalindrome('a');
if (result !== 'a') {
    console.log('failed test 2, ' + result);
}

result = longestPalindrome('"civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth"');
if (result !== 'a') {
    console.log('failed test 2, ' + result);
}
