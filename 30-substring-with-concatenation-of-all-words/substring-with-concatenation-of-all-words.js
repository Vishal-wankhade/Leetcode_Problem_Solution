/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
var findSubstring = function(s, words) {
    
  if (!s || words.length === 0) return [];

    const map = new Map();
    for (let word of words) {
        map.set(word, (map.get(word) || 0) + 1);
    }

    const wordLength = words[0].length;
    const totalWords = words.length;
    const substringLength = wordLength * totalWords;
    const result = [];

    for (let i = 0; i < wordLength; i++) {
        let left = i;
        let right = i;
        let count = 0;
        const currentMap = new Map();

        while (right + wordLength <= s.length) {
            const word = s.slice(right, right + wordLength);
            right += wordLength;

            if (map.has(word)) {
                currentMap.set(word, (currentMap.get(word) || 0) + 1);
                count++;

                while (currentMap.get(word) > map.get(word)) {
                    const leftWord = s.slice(left, left + wordLength);
                    currentMap.set(leftWord, currentMap.get(leftWord) - 1);
                    count--;
                    left += wordLength;
                }

                if (count === totalWords) {
                    result.push(left);
                }
            } else {
                currentMap.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;

};