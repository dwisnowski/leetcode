/**
 * @param {number[]} height
 * @return {number}
 */

function getVolume(height1, height2, distance) {
    let smallerHeight = Math.min(height1, height2);

    return smallerHeight * distance;
}

// takes too long but does work.
// var maxArea = function(heights) {
//     // console.log('height: ' + JSON.stringify(height));
//
//     //keep track of max volume seen
//     //move left to right checking all compliment places to the right for a higher max volume
//
//     //max volume = height of the smaller of the 2 places times the distance
//
//
//     let maxVolume = 0;
//
//     for (let startingPosition = 0; startingPosition < heights.length; startingPosition++){
//         let startingHeight = heights[startingPosition];
//         if (startingPosition + 1 < heights.length) {
//             for (let endingPosition = startingPosition + 1; endingPosition < heights.length; endingPosition++) {
//                 let distance = endingPosition-startingPosition;
//                 let currentVolume = getVolume(startingHeight, heights[endingPosition], distance);
//
//                 maxVolume = Math.max(currentVolume, maxVolume);
//             }
//         }
//     }
//
//     return maxVolume;
// };

var maxArea = function (heights) {
    // console.log('height: ' + JSON.stringify(height));

    //keep track of max volume seen
    //keep track of left pointer and right pointer
    // while more to check
    // calc area
    // update max area
    // if left pointer is taller
    // decide to move right pointer -> left
    //else
    // decide to move left pointer -> right
    // return max area

    let maxVolume, leftPointerIndex, rightPointerIndex;

    maxVolume = 0;
    leftPointerIndex = 0;
    rightPointerIndex = heights.length - 1;

    while (leftPointerIndex < rightPointerIndex) {
        let currentVolume = getVolume(heights[leftPointerIndex], heights[rightPointerIndex], rightPointerIndex - leftPointerIndex);
        maxVolume = Math.max(maxVolume, currentVolume);
        if (heights[leftPointerIndex] > heights[rightPointerIndex]) {
            rightPointerIndex--;
        } else {
            leftPointerIndex++;
        }
    }

    return maxVolume;
};


let expected, actual, height;

height = [1, 8, 6, 2, 5, 4, 8, 3, 7];
expected = 49;
actual = maxArea(height);
if (actual !== expected) {
    console.log('actual: ' + actual);
    console.log('expected: ' + expected);
    console.log('failed test 1');
}
