/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {

    var count = 0;

    var max = -1;

    for(var i =0; i <s.length; i++){
        if(s[i] === '('){
            count++;
        }

        if(s[i] === ')'){
            count--;
        }

        max = Math.max(max,count);
    }
    return max;
};