/**
 * @param {number} x
 * @return {string}
 */
var intToRoman = function(x) {
    var map = {
        "1lo": "I",
        "1hi": "V",
        "2lo": "X",
        "2hi": "L",
        "3lo": "C",
        "3hi": "D",
        "4lo": "M",
    };
    
    var res = ""
    var num = x;
    var level = 1;
    while (num > 0) {
          var pop = num % 10;
          num = (num - pop) / 10;
          
          var numeral = "";
          switch (pop) {
                case 4:
                    numeral = map[level + "lo"] + map[level + "hi"];
                    break;
                case 9:
                    numeral = map[level + "lo"] + map[(level + 1) + "lo"];
                    break;
                default:
                    if (pop > 4) { numeral = map[level + "hi"] };
                    for (var i = 0; i < pop % 5; i++) {
                        numeral += map[level + "lo"];
                    }
                    break;
          }
          
          res = numeral + res;
          level++;
    }
    
    return res;
};