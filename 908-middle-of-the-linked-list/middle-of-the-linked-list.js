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
var middleNode = function(head) {

//     var count = 0;

//     var temp = head;

//     while(temp.next !== null){
//         temp = temp.next;
//         count++;
//     }

//     var n = (count/2);

//    temp = head;
//    for(var i = 0; i < n; i++){
//        temp = temp.next;
//    }

//     return temp;
    
    var slow = head;
var fast = head;

while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
}

return slow;


};