/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    
    var temp = head;
    var pre = null;

    while(temp !== null){
        var next = temp.next;
        temp.next = pre;

        pre = temp;
        temp = next;      
    }
    return pre;
};