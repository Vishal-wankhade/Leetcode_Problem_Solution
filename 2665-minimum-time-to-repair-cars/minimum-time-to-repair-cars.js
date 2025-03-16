/**
 * @param {number[]} ranks
 * @param {number} cars
 * @return {number}
 */
 
 function checkCars(ranks, cars, mid) {
    let n = 0;

    for (let rank of ranks) {
        n += Math.floor(Math.sqrt(mid / rank)); // Use Math.floor for precision
    }

    return n >= cars;
}

var repairCars = function(ranks, cars) {
    let l = 1;
    let r = Math.max(...ranks) * cars * cars;
    let result = r; // Declare and initialize result

    while (l <= r) {
        let mid = Math.floor((l + r) / 2); // Ensure integer mid

        if (checkCars(ranks, cars, mid)) {
            result = mid;
            r = mid - 1;
        } else {
            l = mid + 1;
        }
    }
    return result;
};
