/**
 root: {"val":4,"left":{"val":2,"left":{"val":1,"left":null,"right":null},"right":{"val":3,"left":null,"right":null}},"right":{"val":7,"left":null,"right":null}}
 val: 2
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
// USING RECURSION
// var searchBST = function (root, val) {
//     // console.log('root: ' + JSON.stringify(root, 2, null));
//     // console.log('val: ' + JSON.stringify(val, 2, null));
//
//     if (root === null) {
//         return null;
//     }
//
//     if (root.val === val) {
//         return root;
//     } else {
//         if (root.val > val) {
//             return searchBST(root.left, val);
//         } else {
//             return searchBST(root.right, val);
//         }
//     }
// };


// USING STACK
var searchBST = function (root, val) {
    // console.log('root: ' + JSON.stringify(root, 2, null));
    // console.log('val: ' + JSON.stringify(val, 2, null));
    let stack = [root];

    if (root === null) {
        return null;
    }

    while (stack.length) {
        let nodeToCheck = stack.pop();
        if (nodeToCheck === null) {
            return null;
        }
        if (nodeToCheck.val === val) {
            return nodeToCheck;
        } else {
            if (nodeToCheck.val > val) {
                stack.push(nodeToCheck.left);
            } else {
                stack.push(nodeToCheck.right);
            }
        }
    }
};


let input;
let output;
let searchValue;
let expectedOutput;

input = {
    'val': 4,
    'left': {
        'val': 2,
        'left': {'val': 1, 'left': null, 'right': null},
        'right': {'val': 3, 'left': null, 'right': null}
    },
    'right': {'val': 7, 'left': null, 'right': null}
};
searchValue = 2;
output = searchBST(input, searchValue);
expectedOutput = {
    'val': 2,
    'left': {'val': 1, 'left': null, 'right': null},
    'right': {'val': 3, 'left': null, 'right': null}
};
if (JSON.stringify(output) != JSON.stringify(expectedOutput)) {
    console.log('failed test 1');
    console.log('output: ' + JSON.stringify(output, null, 2));
    console.log('expectedOutput: ' + JSON.stringify(expectedOutput, null, 2));
}
