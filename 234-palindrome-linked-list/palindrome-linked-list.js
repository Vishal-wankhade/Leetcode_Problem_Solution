/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {

    var stack = [];
    
    var temp = head;

    while(temp !== null){
        stack.push(temp.val);
        temp = temp.next
    }


    temp = head;

    while(temp !== null){
        var n = stack.length;
        if(stack[n-1] !== temp.val){
         return false ;
        }
       
             temp = temp.next;
             stack.pop();
       
    }

    return true; 
    
    
};