/**
 * @param {number[]} commands
 * @param {number[][]} obstacles
 * @return {number}
 */
var robotSim = function(commands, obstacles) {
// Directions represent North, East, South, West respectively
    const directions = [
        [0, 1],  // North
        [1, 0],  // East
        [0, -1], // South
        [-1, 0]  // West
    ];

    let x = 0, y = 0; // Robot's starting position
    let directionIndex = 0; // Start facing North
    let maxDistanceSquared = 0;

    // Convert obstacles to a Set of strings for easy lookup
    const obstacleSet = new Set(obstacles.map(obstacle => obstacle.join(',')));

    for (let command of commands) {
        if (command === -2) {
            // Turn left
            directionIndex = (directionIndex + 3) % 4;
        } else if (command === -1) {
            // Turn right
            directionIndex = (directionIndex + 1) % 4;
        } else {
            // Move forward k steps
            const [dx, dy] = directions[directionIndex];
            for (let i = 0; i < command; i++) {
                const nextX = x + dx;
                const nextY = y + dy;
                if (!obstacleSet.has(`${nextX},${nextY}`)) {
                    x = nextX;
                    y = nextY;
                    maxDistanceSquared = Math.max(maxDistanceSquared, x * x + y * y);
                } else {
                    // If there is an obstacle, stop moving in this direction
                    break;
                }
            }
        }
    }

    return maxDistanceSquared;
};