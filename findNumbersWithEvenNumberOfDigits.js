/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function(nums) {
    let i = 0;
    let accum = 0;
    while (i < nums.length) {
        if (nums[i].toString().length % 2 === 0) {
            accum++;
        }
        i++;
    }
    return accum;
};
