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


 
var swapPairs = function(head) {

if (!head || !head.next) {
        return head;
    }

    // Create a dummy node to simplify the logic
    var dummy = new ListNode(0);
    dummy.next = head;
    var pre = dummy;

    // Iterate through the list and swap pairs of nodes
    while (pre.next && pre.next.next) {
        var first = pre.next;
        var sec = first.next;

        // Swap the pair of nodes
        pre.next = sec;
        first.next = sec.next;
        sec.next = first;

        // Move pre to the next pair
        pre = first;
    }

    return dummy.next;

}


