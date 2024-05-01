/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
    var s = "";
    var next = 0;



    for (var i = 0; i < word.length; i++) {
        if (word[i] === ch) {
            var sub = word.substring(0, i + 1).split("").reverse().join("");
            console.log(sub)
            s = s + sub;
            next = i + 1;
            break;
        }
    }

    for (var i = next; i < word.length; i++) {
        s = s + word[i];
    }

    return s;


};