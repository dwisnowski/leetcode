/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var permute = function (nums) {
    if (nums.length === 0) {
        return [[]];
    }

    let permutations = [];
    for (let i = 0; i < nums.length; i++) {
        let numsCopy = [...nums];
        numsCopy.splice(i, 1);
        permutations = permutations.concat(permute(numsCopy).map((perm) => {
            perm.unshift(nums[i]);
            return perm;
        }));
    }
    return permutations;
};

let expected, actual, nums;


nums = [1, 2, 3];
expected = [[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 1, 2], [3, 2, 1]];
actual = permute(nums);
if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log('actual: ' + JSON.stringify(actual));
    console.log('expected: ' + JSON.stringify(expected));
    console.log('failed test 1');
}

nums = [0, 1];
expected = [[0, 1], [1, 0]];
actual = permute(nums);
if (JSON.stringify(actual) !== JSON.stringify(expected)) {
    console.log('actual: ' + JSON.stringify(actual));
    console.log('expected: ' + JSON.stringify(expected));
    console.log('failed test 2');
}
