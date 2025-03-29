/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
//  let left = new Array(height.length);
//  let right = new Array(height.length);
// let total = 0;

//  left[0] = height[0];
//  right[right.length -1] =  height[height.length-1];


//  for(let i = 1;  i< height.length; i++){
//      left[i] = Math.max(height[i], left[i-1]);
//  }

//  for(let i = height.length - 2;  i >= 0; i--){
//      right[i] = Math.max(height[i], right[i+1]);
//  }

//  console.log(left);
//  console.log(right)

//  for(let i = 0; i< height.length; i++){
//      total += Math.min(left[i],right[i]) - height[i];
//  }
//  return total

let n = height.length;
let left =0;
let right = n-1;


let leftMost = 0;
let rightMost = 0;

let total = 0;

while(left < right){

    leftMost = Math.max(leftMost,height[left]);
    rightMost = Math.max(rightMost,height[right]);

    if(leftMost < rightMost){
        total += leftMost - height[left];
        left++;
    }else{
        total += rightMost - height[right];
        right--
    }
}
return total;




};