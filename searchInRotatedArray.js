/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is rotated at an unknown pivot index k (0 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

Given the array nums after the rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

You must write an algorithm with O(log n) runtime complexity.
 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    // console.log('nums: ' + nums);
    // start left to right
    //check if left most value is less than the value in the middle
    //if so then we are in the "right" half of the pivot
    // else in the left half of the pivot

    //if target == mid point, return index at midpoint
    //if left.legnth and right.legnth == 0 then return false
    //else if target  < right most value in left side, go left
    //else go right

    if (!nums.length) {
        return -1;
    }

    if(nums.length === 1 && nums[0] === target){
        return 0;
    }


    let midIndex, startIndex, endIndex;

    startIndex = 0;
    endIndex = nums.length-1;

    while (endIndex > startIndex) {
        midIndex = Math.floor((endIndex - startIndex) / 2) + startIndex;
        // console.log(`startIndex: ${startIndex},  midIndex: ${midIndex},   endIndex: ${endIndex}  ||||||   startValue: ${nums[startIndex]},  midValue: ${nums[midIndex]},   endValue: ${nums[endIndex]}`);
        if (nums[midIndex] === target) {
            // console.log('found At middle: midIndex: ' + midIndex);
            return midIndex;
        }
        if (nums[startIndex] === target) {
            // console.log('found At start: startIndex: ' + startIndex);
            return startIndex;
        }
        if (nums[endIndex] === target) {
            // console.log('found At end: endIndex: ' + endIndex);
            return endIndex;
        }

        let leftSideIsOrderedCorrectly = nums[startIndex] < nums[midIndex];

        if (leftSideIsOrderedCorrectly) {
            if (nums[startIndex] <= target && target < nums[midIndex]) {
                //go left
                // leave startIndexLeft unchanged;
                endIndex = midIndex;
                continue;
            } else {
                //go right
                startIndex = midIndex + 1;
                //leave end index unchanged
                continue;
            }
        } else {
            if (nums[midIndex] <= target && target < nums[endIndex]) {
                //go right
                startIndex = midIndex + 1;
                //leave end index unchanged
                continue;
            } else {
                //go left
                // leave startIndexLeft unchanged;
                endIndex = midIndex;
                continue;
            }
        }
    }
    return -1;
};


let expected, actual, nums, target;

nums = [4, 5, 6, 7, 0, 1, 2];
target = 0;
expected = 4;
actual = search(nums, target);
if (actual !== expected) {
    console.log('actual: ' + actual);
    console.log('expected: ' + expected);
    console.log('failed test 1');
}

nums = [4,5,6,7,0,1,2];
target = 3;
expected = -1;
actual = search(nums, target);
if (actual !== expected) {
    console.log('actual: ' + actual);
    console.log('expected: ' + expected);
    console.log('failed test 2');
}
