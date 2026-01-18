/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestMagicSquare = function(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // prefix sums
    const rowSum = Array.from({ length: m }, () => Array(n + 1).fill(0));
    const colSum = Array.from({ length: m + 1 }, () => Array(n).fill(0));

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            rowSum[i][j + 1] = rowSum[i][j] + grid[i][j];
            colSum[i + 1][j] = colSum[i][j] + grid[i][j];
        }
    }

    function getRow(i, c1, c2) {
        return rowSum[i][c2] - rowSum[i][c1];
    }

    function getCol(j, r1, r2) {
        return colSum[r2][j] - colSum[r1][j];
    }

    for (let k = Math.min(m, n); k >= 2; k--) {
        for (let r = 0; r + k <= m; r++) {
            for (let c = 0; c + k <= n; c++) {
                let target = getRow(r, c, c + k);
                let ok = true;

                // rows
                for (let i = r; i < r + k; i++) {
                    if (getRow(i, c, c + k) !== target) {
                        ok = false; break;
                    }
                }

                // cols
                for (let j = c; j < c + k && ok; j++) {
                    if (getCol(j, r, r + k) !== target) {
                        ok = false; break;
                    }
                }

                // diagonals
                let d1 = 0, d2 = 0;
                for (let i = 0; i < k; i++) {
                    d1 += grid[r + i][c + i];
                    d2 += grid[r + i][c + k - 1 - i];
                }

                if (ok && d1 === target && d2 === target) {
                    return k;
                }
            }
        }
    }

    return 1;
};
