/**
 * https://leetcode.com/problems/3sum-closest/submissions/
 *
 * Given an array nums of n integers and an integer target, find three integers in nums such that the sum is closest to target.
 * Return the sum of the three integers. You may assume that each input would have exactly one solution.
 *
 *
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    // console.log('target: ' + target);
    nums = nums.sort((lhs, rhs) => {
        return lhs - rhs;
    });
    let smallestDiff = Math.abs(target - (nums[0] + nums[1] + nums[nums.length-1]));
    let sum = nums[0] + nums[1] + nums[nums.length-1];

    let pointerLo, pointerHi, pointerStart;

    pointerStart = 0;

    // console.log(nums);

    for (let currPointer = pointerStart; currPointer < nums.length; currPointer++) {
        pointerLo = currPointer + 1;
        pointerHi = nums.length - 1;


        while (pointerLo < pointerHi) {
            let currTotal = nums[currPointer] + nums[pointerLo] + nums[pointerHi];
            let currDiff = Math.abs(target - currTotal);
            // console.log(`target: ${target} = ${nums[currPointer]} + ${nums[pointerLo]} + ${nums[pointerHi]} = total: ${currTotal} ---- Diff: ${currDiff} ---- smallestDiff: ${smallestDiff} --- sum: ${sum}`);
            if (currDiff === 0) {
                return target;
            }

            if (currDiff <= smallestDiff) {
                smallestDiff = currDiff;
                sum = currTotal;
            }

            if (target <= currTotal) {
                pointerHi--;
            } else {
                pointerLo++;
            }
        }
    }

    return sum;
};


let expected, actual, nums, target;
//
// nums = [-1, 2, 1, -4];
// target = 1;
// expected = 2;
// actual = threeSumClosest(nums, target);
// if (actual !== expected) {
//     console.log('actual: ' + JSON.stringify(actual));
//     console.log('expected: ' + JSON.stringify(expected));
//     console.log('failed test 1');
// }
// console.log('--------------------------------------');
//
// nums = [1, 1, 1, 0];
// target = -100;
// expected = 2;
// actual = threeSumClosest(nums, target);
// if (actual !== expected) {
//     console.log('actual: ' + JSON.stringify(actual));
//     console.log('expected: ' + JSON.stringify(expected));
//     console.log('failed test 2');
// }
// console.log('--------------------------------------');
//
// nums = [0, 2, 1, -3];
// target = 1;
// expected = 0;
// actual = threeSumClosest(nums, target);
// if (actual !== expected) {
//     console.log('actual: ' + JSON.stringify(actual));
//     console.log('expected: ' + JSON.stringify(expected));
//     console.log('failed test 3');
// }
// console.log('--------------------------------------');
//
//
// nums = [1, 1, -1, -1, 3];
// target = -1;
// expected = -1;
// actual = threeSumClosest(nums, target);
// if (actual !== expected) {
//     console.log('actual: ' + JSON.stringify(actual));
//     console.log('expected: ' + JSON.stringify(expected));
//     console.log('failed test 4');
// }
// console.log('--------------------------------------');


nums = [0,-4,1,-5]
target = 0;
expected = -3;
actual = threeSumClosest(nums, target);
if (actual !== expected) {
    console.log('actual: ' + JSON.stringify(actual));
    console.log('expected: ' + JSON.stringify(expected));
    console.log('failed test 5');
}
console.log('--------------------------------------');
