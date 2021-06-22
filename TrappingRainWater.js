/**
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.
 *
 * Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
 Output: 6
 Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
 *
 * @param {number[]} height
 * @return {number}
 */

function calcTotalTrapVolum(barsSubArray) {
    if (barsSubArray.length > 2) {
        let totalPossibleVolume = Math.min(barsSubArray[0], barsSubArray[barsSubArray.length - 1]) * (barsSubArray.length - 2);
        let middleValues = barsSubArray.slice(1, barsSubArray.length - 1);
        for (const middleValue of middleValues) {
            totalPossibleVolume -= middleValue;
        }
        return totalPossibleVolume;
    }

    return 0;
}

var trap = function (height) {
    // store maxArea water trapped

    //func is water well {
    // let total possible volume =  min(startHieght, endHeight) * (endIndex - startIndex)
    //for each middle bar
    // total possible volume -= bar height;
    //return total possible volume;

    // separate into distinct water wells
    // read left to right
    //     if right is less than left
    // advance right to next index
    //     else
    // update maxWaterTrapped by calc area of left to right
    // reset left pointer to right and make right = right +1

    // for each water well
    // calc max area for well and add to running total

    //return total

    let maxTrappedWater = 0;
    let start = 0;
    let end;

    for (end = 1; end < height.length; end++) {
        if (height[start] <= height[end]) {
            maxTrappedWater += calcTotalTrapVolum(height.slice(start, end + 1));
            start = end;
        }
    }

    if (end - start > 1) {
        let possibleExtraTrapString = height.slice(start, end + 1).reverse();
        start = 0;
        for (end = 1; end < possibleExtraTrapString.length; end++) {
            if (possibleExtraTrapString[start] <= possibleExtraTrapString[end]) {
                maxTrappedWater += calcTotalTrapVolum(possibleExtraTrapString.slice(start, end + 1));
                start = end;
            }
        }
    }

    return maxTrappedWater;
};


let expected, actual, height;

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
expected = 6;
actual = trap(height);
if (actual !== expected) {
    console.log('actual: ' + actual);
    console.log('expected: ' + expected);
    console.log('failed test 1');
}

height = [4, 2, 0, 3, 2, 5];
expected = 9;
actual = trap(height);
if (actual !== expected) {
    console.log('actual: ' + actual);
    console.log('expected: ' + expected);
    console.log('failed test 2');
}
