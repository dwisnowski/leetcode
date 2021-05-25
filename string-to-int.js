/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    s = s.trim();
    let isSignRegex = /^[\-|+]/;
    let isNumericRegex = /^[0-9]/;
    let hasSeenOneSignAlready = false;
    let hasSeenOneNumberAlready = false;
    let valueArray = [];


    for (const char of s.split('')) {
        let isSign = isSignRegex.test(char);
        let isNumeric = isNumericRegex.test(char);

        if (isSign && hasSeenOneNumberAlready && !hasSeenOneNumberAlready) {
            return 0;
        } else if (isSign && !hasSeenOneSignAlready && !hasSeenOneNumberAlready) {
            hasSeenOneSignAlready = true;
            valueArray.push(char);
            continue;
        }

        if (!hasSeenOneNumberAlready && !isSign && !isNumeric) {
            return 0;
        }

        if (!isSign && !isNumeric) {
            break;
        }

        if (isNumeric) {
            hasSeenOneNumberAlready = true;
            valueArray.push(char);
        }
    }

    let number = parseInt(valueArray.join(''));
    if (number > Math.pow(2, 31)) {
        return Math.pow(2, 31);
    } else if (number < -1 * Math.pow(2, 31)) {
        return -1 * Math.pow(2, 31);
    }

    if (isNaN(number)) {
        return 0;
    }
    return number;
};


let result;

result = myAtoi('42');
if (result !== 42) {
    console.log('failed test 1: ' + result);
}

result = myAtoi('   -42');
if (result !== -42) {
    console.log('failed test 2: ' + result);
}

result = myAtoi('words and 987');
if (result !== 0) {
    console.log('failed test 3: ' + result);
}

result = myAtoi('-4193 with words');
if (result !== -4193) {
    console.log('failed test 4: ' + result);
}


result = myAtoi('4193 with words');
if (result !== 4193) {
    console.log('failed test 5: ' + result);
}

result = myAtoi('words and 987');
if (result !== 0) {
    console.log('failed test 6: ' + result);
}

result = myAtoi('+-12');
if (result !== 0) {
    console.log('failed test 7: ' + result);
}

result = myAtoi('3.1234');
if (result !== 3) {
    console.log('failed test 8: ' + result);
}
