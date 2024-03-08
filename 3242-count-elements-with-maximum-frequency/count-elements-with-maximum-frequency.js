/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function(nums) {
    
  const freq = new Map();  // Map to store frequency of elements
    let maxFreq = 0;  // Variable to store maximum frequency
    
    // Count frequency of each element
    for (let num of nums) {
        freq.set(num, (freq.get(num) || 0) + 1);
        maxFreq = Math.max(maxFreq, freq.get(num));
    }
    
    let countMaxFreq = 0; // Count of elements with maximum frequency
    
    // Count elements with maximum frequency
    for (let [key, value] of freq) {
        if (value === maxFreq) {
             countMaxFreq += value; 
        }
    }
    
    return countMaxFreq;

};