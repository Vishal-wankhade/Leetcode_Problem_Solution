/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {

    var slow = head;
    var fast = head;

     while (fast.next && fast.next.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    var cur = slow.next;
    var pre = null;

    while(cur !== null){
        var next = cur.next;
       cur.next = pre;
       pre = cur;
       cur = next
    }

    slow.next = null;
 
       var first = head;
       var second = pre;

       while(second !== null){
        var temp1 = first.next;
        var temp2 = second.next;
        first.next = second;
        
        second.next = temp1;
        first = temp1;
        second = temp2;
       }

 
    
};