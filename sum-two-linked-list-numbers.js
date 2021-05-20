function getValueFromLL(linkedList) {
    let valueArray = [linkedList.val];
    while (linkedList.next) {
        linkedList = linkedList.next;
        valueArray.unshift(linkedList.val)
    }
    return parseInt(valueArray.join(''));
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
    let valueFromLL = getValueFromLL(l1);
    let valueFromLL1 = getValueFromLL(l2);
    let resultNumber = valueFromLL + valueFromLL1;
    let resultString = resultNumber.toString().split('');

    return resultString.reduce((accum, digit) => {
        return {
            val: digit,
            next: accum
        };
    }, null);
};


let l1 = {'val': 2, 'next': {'val': 4, 'next': {'val': 3, 'next': null}}}
    , l2 = {'val': 5, 'next': {'val': 6, 'next': {'val': 4, 'next': null}}};
// let Output = [7,0,8];
let result = addTwoNumbers(l1, l2);
