/*
Write a program to find the node at which the intersection of two singly linked lists begins.


For example, the following two linked lists:

A:          a1 → a2
                   ↘
                     c1 → c2 → c3
                   ↗            
B:     b1 → b2 → b3
begin to intersect at node c1.


Notes:

If the two linked lists have no intersection at all, return null.
The linked lists must retain their original structure after the function returns.
You may assume there are no cycles anywhere in the entire linked structure.
Your code should preferably run in O(n) time and use only O(1) memory.
*/

// Solution
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    if (headA === null || headB === null)
        return null;
    var lenA = 1;
    var lenB = 1;
    var len;
    var p1 = headA;
    var p2 = headB;
    while (p1.next !== null) {
        p1 = p1.next;
        lenA ++;
    }
    while (p2.next !== null) {
        p2 = p2.next;
        lenB ++;
    }
    p1 = headA;
    p2 = headB;
    if (lenA > lenB) {
        len = lenA - lenB;
        while (len) {
            p1 = p1.next;
            len --;
        }
    } else {
        len = lenB - lenA;
        while (len) {
            p2 = p2.next;
            len --;
        }
    }
    while (p1 !== null && p2 !== null) {
        if (p1.val === p2.val)
            return p1;
        p1 = p1.next;
        p2 = p2.next;
    }
    return null;
};