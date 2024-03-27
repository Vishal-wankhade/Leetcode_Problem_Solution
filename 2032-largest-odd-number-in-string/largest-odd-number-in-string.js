/**
 * @param {string} num
 * @return {string}
 */
var largestOddNumber = function(num) {



    var max = "";
    var i = num.length -1;

    while( i >= 0){
        if(Number(num[i])%2 !== 0){
            var str = num.substring(0,i+1);
             max += str ;
             break;
        }
       
        i--;
    }

    return max;
};