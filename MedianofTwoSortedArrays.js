/**
 * Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.
 *
 * The overall run time complexity should be O(log (m+n)).
 *
 *
 *
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function getMedian(values) {
    if (!values.length) {
        return undefined;
    }
    if (values.length === 1) {
        return values[0];
    }

    if (values.length % 2 !== 0) {
        return values[(values.length - 1) / 2];
    } else {
        let midPoint = values.length / 2;
        return (values[midPoint - 1] + values[midPoint]) / 2;
    }
}

function combineArrays(nums1, nums2) {
    let combined = [];

    let nums1Pointer = 0;
    let nums2Pointer = 0;
    while (nums1Pointer !== nums1.length || nums2Pointer !== nums2.length) {
        if (nums1Pointer !== nums1.length && nums2Pointer !== nums2.length) {
            if (nums1[nums1Pointer] < nums2[nums2Pointer]) {
                combined.push(nums1[nums1Pointer]);
                nums1Pointer++;
            } else {
                combined.push(nums2[nums2Pointer]);
                nums2Pointer++;
            }
        }else {
            let num1HasMoreToGo = nums1Pointer !== nums1.length;
            if (num1HasMoreToGo) {
                combined.push(nums1[nums1Pointer]);
                nums1Pointer++;
            }else {
                combined.push(nums2[nums2Pointer]);
                nums2Pointer++;
            }
        }
    }
    return combined;
}

var findMedianSortedArrays = function (nums1, nums2) {
    let combineArray = combineArrays(nums1, nums2);

    return getMedian(combineArray);
};

let result;

let list1 = [1, 3];
let list2 = [2];
result = findMedianSortedArrays(list1, list2);
if (result !== 2) {
    console.log('failed test 1', result);
}

list1 = [0, 0];
list2 = [0, 0];
result = findMedianSortedArrays(list1, list2);
if (result !== 0) {
    console.log('failed test 2', result);
}

list1 = [];
list2 = [1];
result = findMedianSortedArrays(list1, list2);
if (result !== 1) {
    console.log('failed test 3', result);
}
list1 = [2];
list2 = [];
result = findMedianSortedArrays(list1, list2);
if (result !== 2) {
    console.log('failed test 4', result);
}


list1 = [0, 0, 0, 0, 0];
list2 = [-1, 0, 0, 0, 0, 0, 1];
result = findMedianSortedArrays(list1, list2);
if (result !== 0) {
    console.log('failed test 5', result);
}
