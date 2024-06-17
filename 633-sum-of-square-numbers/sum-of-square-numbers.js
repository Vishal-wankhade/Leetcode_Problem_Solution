/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function(c) {
    
  if(c < 0 ) return false;

  var start = 0;
  var end = Math.ceil(Math.sqrt(c));

  while(start <= end){
    var sum = start * start + end * end;

    if(sum < c){
        start++;
    }
    else if(sum > c){
        end--;
    }
    else{
        return true;
    }
  }
  return false;
};