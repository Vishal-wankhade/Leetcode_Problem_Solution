/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {

//    Recursive approach

 // Base case: if either list is null, return the other list
    if (!list1) return list2;
    if (!list2) return list1;
    
    // Compare the values of the heads of the two lists
    if (list1.val < list2.val) {
        // If list1's value is smaller, the merged list starts with list1
        list1.next = mergeTwoLists(list1.next, list2);
        return list1;
    } else {
        // Otherwise, list2's value is smaller or equal, so the merged list starts with list2
        list2.next = mergeTwoLists(list1, list2.next);
        return list2;
};
    
};