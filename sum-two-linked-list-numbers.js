function getValueFromLL(linkedList) {
    let valueArray = [linkedList.val];
    while (linkedList.next) {
        linkedList = linkedList.next;
        valueArray.unshift(linkedList.val);
    }
    return parseInt(valueArray.join(''));
}

function getNextNode(linkedList) {
    if (linkedList.next) {
        return linkedList.next;
    } else {
        return {
            val: 0,
            next: null
        };
    }
}

function getNextNodeAndCarry(carryValue, l1, l2) {
    let tempSum = carryValue + l1.val + l2.val;
    let carrySum = tempSum - 10;
    let hasCarry = carrySum >= 0;
    return {
        carryValue: hasCarry ? 1 : 0,
        nextNode: {
            val: hasCarry ? carrySum : tempSum
        }
    };
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carryValue = 0;
    let nextNode;
    let headNode = currentNode = {};
    while (l1.next || l2.next) {
        ({carryValue, nextNode} = getNextNodeAndCarry(carryValue, l1, l2));
        currentNode.next = nextNode;
        currentNode = currentNode.next;
        l1 = getNextNode(l1);
        l2 = getNextNode(l2);
    }

    ({carryValue, nextNode} = getNextNodeAndCarry(carryValue, l1, l2));
    nextNode.next = null;
    currentNode.next = nextNode;
    currentNode = currentNode.next;

    if (carryValue > 0) {
        currentNode.next = {
            val: 1,
            next: null
        };
    }
    return headNode.next;
};


let l1, l2;
let result;

l1 = {'val': 2, 'next': {'val': 4, 'next': {'val': 3, 'next': null}}};
l2 = {'val': 5, 'next': {'val': 6, 'next': {'val': 4, 'next': null}}};
result = addTwoNumbers(l1, l2);
if (JSON.stringify(result) !== '{"val":7,"next":{"val":0,"next":{"val":8,"next":null}}}') {
    console.log('failed test 1, result: ' + JSON.stringify(result));
}


l1 = {'val': 9, 'next': {'val': 9, 'next': {'val': 9, 'next':{'val': 9, 'next':{'val': 9, 'next':{'val': 9, 'next': {'val': 9, 'next': null}}}}}}};
l2 = {'val': 9, 'next': {'val': 9, 'next': {'val': 9, 'next':{'val': 9, 'next': null}}}};
result = addTwoNumbers(l1, l2);
expectedResult = JSON.stringify({'val': 8, 'next': {'val': 9, 'next': {'val': 9, 'next':{'val': 9, 'next':{'val': 0, 'next':{'val': 0, 'next': {'val': 0, 'next': {'val': 1, 'next': null}}}}}}}});
if (JSON.stringify(result) !== expectedResult) {
    console.log('failed test 2, result: ' + JSON.stringify(result));
}
