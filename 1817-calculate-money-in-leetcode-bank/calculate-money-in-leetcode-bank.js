/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
    let lm = 1;
    let cur = lm;
    let day = 1;
    let sum = 0;

    while (n !== 0){
        if(day > 7){
            lm = lm + 1;
            day = 1;
            cur = lm;
        };
       sum += cur ;
       cur += 1; 
       n--;
       day++;

    }
    return sum;
};