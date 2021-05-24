var reverse = function (x) {
    let multiplier = 1;
    if (x < 0) {
        multiplier = -1;
    }
    let number = parseInt(x.toString().split('').reverse().join(''));
    let highestValue = Math.pow(2, 31);
    if (number !== 0 && Math.abs(number)  > highestValue) {
        return 0;
    }
    return multiplier * number;
};

let result;
result = reverse(321);
if (result !== 123) {
    console.log('failed test 1: ' + result);
}

result = reverse(1563847412);
if (result !== 0) {
    console.log('failed test 2: ' + result);
}
