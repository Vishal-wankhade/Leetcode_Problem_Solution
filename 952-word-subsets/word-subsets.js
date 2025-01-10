/**
 * @param {string[]} words1
 * @param {string[]} words2
 * @return {string[]}
 */


var wordSubsets = function(words1, words2) {
    const getCharFrequency = (word) => {
        const freq = Array(26).fill(0);
        for (const char of word) {
            freq[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
        }
        return freq;
    };

    const maxFreq = Array(26).fill(0);
    for (const word of words2) {
        const freq = getCharFrequency(word);
        for (let i = 0; i < 26; i++) {
            maxFreq[i] = Math.max(maxFreq[i], freq[i]);
        }
    }

    const ans = [];
    for (const word of words1) {
        const freq = getCharFrequency(word);
        let isSubset = true;
        for (let i = 0; i < 26; i++) {
            if (freq[i] < maxFreq[i]) {
                isSubset = false;
                break;
            }
        }
        if (isSubset) ans.push(word);
    }

    return ans;
};

