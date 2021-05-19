var twoSum = (nums, target) => {
    for (let firstIndex = 0; firstIndex < nums.length; firstIndex++){
        let num = nums[firstIndex];
        let secondIndex = nums.indexOf(target - num);
        if (secondIndex !== -1) {
            if (firstIndex === secondIndex) {
                secondIndex = nums.indexOf(target - num, firstIndex + 1);
            }
            if (firstIndex !== secondIndex && secondIndex !== -1) {
                return [firstIndex, secondIndex];
            } else {
                continue;
            }
        }
    }
    return false;
};

let input = [2, 7, 11, 15];
let target = 9;
let output = twoSum(input, target);
if (!(output[0] === 0 && output[1] === 1)) {
    console.log('failed test 1');
}

input = [3, 2, 4];
target = 6;
output = twoSum(input, target);
if (!(output[0] === 1 && output[1] === 2)) {
    console.log('failed test 2');
    console.log('output: ' + output);
}

input = [3, 3];
target = 6;
output = twoSum(input, target);
if (!(output[0] === 0 && output[1] === 1)) {
    console.log('failed test 3');
}

input = [0, 4, 3, 0];
target = 0;
output = twoSum(input, target);
if (!(output[0] === 0 && output[1] === 3)) {
    console.log('failed test 4');
}

input = [-3, 4, 3, 90];
target = 0;
output = twoSum(input, target);
if (!(output[0] === 0 && output[1] === 2)) {
    console.log('failed test 5');
}
