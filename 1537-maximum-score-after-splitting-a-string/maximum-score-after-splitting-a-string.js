/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
       let right = 0;
    const n = s.length;
    let left = 0;
    
    let sum = 0;
    let max = sum;
   
    for(let i = 0; i < n; i++)
    {
        if(s[i]== 1){
            right++;
        }
    }
    
    for(let i = 0; i < n-1; i++){
        sum = 0;
        if(s[i] == 1){
            right--;
        }else{
            left++;
        }
        sum = right+left;
        max = Math.max(sum,max);
    }
    return max;
};