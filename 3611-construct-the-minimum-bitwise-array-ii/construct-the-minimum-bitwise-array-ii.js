/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minBitwiseArray = function(nums) {
        const N = nums.length;
        const Ans = Array(N).fill(-1);

        for (let i = 0; i < N; i++) {
            if (nums[i] === 2) continue;

            let n = nums[i];
            let pos = 0;

            while (n > 0 && ((n >> pos) & 1) === 1) {
                pos++;
            }

            if ((1 << pos) > n) {
                let highestBit = 31 - Math.clz32(n);
                n = n & ~(1 << highestBit);
            } else {
                n = n & ~(1 << (pos - 1));
            }

            Ans[i] = n;
        }

        return Ans;
    
};