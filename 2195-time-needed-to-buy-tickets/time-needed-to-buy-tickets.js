/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
 let time = 0;
    let queue = tickets.slice();

    while (queue[k] > 0) {
        for (let i = 0; i < queue.length; i++) {
            if (queue[i] > 0) {
                queue[i]--;
                time++;
                if (i === k && queue[k] === 0) {
                    return time;
                }
            }
        }
    }
};