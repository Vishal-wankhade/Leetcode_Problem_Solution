/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function(deck) {

   
    var skip = false;

   

    var arr = deck.sort((a,b) => a - b);

    var i = 0;
    var j = 0;
    var n = arr.length;
     var result = new Array(n).fill(0);

    while(i < n){
        if(result[j] === 0){
            if(skip == false){
                result[j] = arr[i];
                i++;
                
            }
            skip = !skip;
        }
        j = (j+1)%n;
    }
    return result;
};