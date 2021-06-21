/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function (root, x, y) {
    // use breadth first search.
    // get a row at a time (store nodes in a new array) (store values in a cousins map {value:parent})
    //     for each node in the "parents array" get his children and add them to the "new parents array" and "cousins map"
    // after finishing the load of a row, check if x and y exist in the set.
    //      (if one exist but not the other, then return false)
    //      (if neither exist, then continue on to the next row and clear the values set)
    //      (if both exist, then return true and end early)


    //setup
    let parentsArray = [];
    let cousinsMap = {};


    //load
    parentsArray.push(root);


    //main
    while (parentsArray.length) {
        parentsArray = parentsArray.reduce((accum, node) => {
            if (node.left) {
                accum.push(node.left);
                cousinsMap[node.left.val] = node.val;
            }

            if (node.right) {
                accum.push(node.right);
                cousinsMap[node.right.val] = node.val;
            }

            return accum;
        }, []);

        if (cousinsMap[x] && cousinsMap[y]){
            if(cousinsMap[x] !== cousinsMap[y] ) {
                return true;
            }else {
                return false;
            }
        } else if (cousinsMap[x] || cousinsMap[y]) {
            return false;
        }else {
            //continue to look for x and y;
        }
    }
};

/*
Runtime: 84 ms, faster than 66.38% of JavaScript online submissions for Cousins in Binary Tree.
Memory Usage: 40.4 MB, less than 32.19% of JavaScript online submissions for Cousins in Binary Tree.
 */


let root, x, y, expected, actual;

root = {"val":1,"left":{"val":2,"left":{"val":4,"left":null,"right":null},"right":null},"right":{"val":3,"left":null,"right":null}};
x = 4;
y = 3;
expected = false;
actual = isCousins(root, x, y);
if (actual !== expected) {
    console.log('failed test 1');
}


root = {"val":1,"left":{"val":2,"left":{"val":4,"left":null,"right":null},"right":null},"right":{"val":3,"left":null,"right":{val:5}}};
x = 4;
y = 5;
expected = true;
actual = isCousins(root, x, y);
if (actual !== expected) {
    console.log('failed test 2');
}
