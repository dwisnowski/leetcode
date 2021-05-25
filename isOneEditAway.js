function isAtMostOneCharOffLengthwise(s1, s2) {
    return s1.length === s2.length || s1.length + 1 === s2.length || s1.length - 1 === s2.length;
}

function bothStringsAreSameLength(s1, s2) {
    return s1.length === s2.length;
}

function OneEditApart(s1, s2) {
    if (s1 === s2) {
        return false;
    }

    if (!isAtMostOneCharOffLengthwise(s1, s2)) {
        return false;
    }

    if (bothStringsAreSameLength(s1, s2)) {
        let numberOfCharsDifferent = s1
            .split('')
            .filter((char, index) => {
                return char !== s2.charAt(index);
            })
            .length;

        return numberOfCharsDifferent === 1;
    } else {
        let smallerOne = s1.length < s2.length ? s1 : s2;
        let largerOne = s1.length < s2.length ? s2 : s1;

        let stringSplit = smallerOne.split('');

        let prevPos = -1;
        for (let i = 0; i < stringSplit.length; i++){
            let char = stringSplit[i];
            let indexOfCharInLargerString = largerOne.indexOf(char, prevPos);
            if (prevPos < indexOfCharInLargerString) {
                prevPos = indexOfCharInLargerString;
            }else {
                return false;
            }
        }
        return true;
    }
}

let result;

if (OneEditApart('cat', 'dog') !== false) {
    console.log('failed test 1');
}
if (OneEditApart('cat', 'cats') !== true) {
    console.log('failed test 2');
}
if (OneEditApart('cat', 'cut') !== true) {
    console.log('failed test 3');
}
if (OneEditApart('cat', 'cast') !== true) {
    console.log('failed test 4');
}
if (OneEditApart('cat', 'at') !== true) {
    console.log('failed test 5');
}
if (OneEditApart('cat', 'act') !== false) {
    console.log('failed test 6');
}
if (OneEditApart('ccc', 'ccrc') !== false) {
    console.log('failed test 7');
}
if (OneEditApart('ccrc', 'ccc') !== false) {
    console.log('failed test 8');
}
