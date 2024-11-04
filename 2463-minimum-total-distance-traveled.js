/**
 * @param {number[]} robot - Positions of each robot on the X-axis.
 * @param {number[][]} factory - Each factory's position and capacity on the X-axis, in the form [position, capacity].
 * @return {number} - The minimum total distance robots need to travel to reach available factories.
 */
var minimumTotalDistance = function (robot, factory) {
  // Sort robot and factory positions for efficient pairing
  robot.sort((a, b) => a - b);
  factory.sort((a, b) => a[0] - b[0]);

  const robotCount = robot.length;
  const factoryCount = factory.length;

  // Initialize DP table to track minimum distances for robots reaching factories
  const dp = Array(robotCount + 1).fill().map(() => Array(factoryCount + 1).fill(0));

  // Base case: if no factory is available (factoryCount), the cost is infinite for unassigned robots
  for (let i = 0; i < robotCount; i++) {
    dp[i][factoryCount] = Infinity;
  }

  // Process factories from right to left, attempting to match robots to each
  for (let j = factoryCount - 1; j >= 0; j--) {
    let prefix = 0;  // Tracks cumulative distance for current factory
    const qq = [[robotCount, 0]];  // Monotonic queue to optimize DP updates

    // Process robots from right to left for current factory
    for (let i = robotCount - 1; i >= 0; i--) {
      // Update cumulative distance between robot[i] and factory[j]
      prefix += Math.abs(robot[i] - factory[j][0]);

      // Remove entries from queue outside current factory's capacity window
      if (qq[0][0] > i + factory[j][1]) {
        qq.shift();
      }

      // Maintain queue by removing elements with higher costs for optimization
      while (qq.length && qq[qq.length - 1][1] >= dp[i][j + 1] - prefix) {
        qq.pop();
      }

      // Add current state to queue and update DP with optimal distance
      qq.push([i, dp[i][j + 1] - prefix]);
      dp[i][j] = qq[0][1] + prefix;
      console.log('qq:', qq)
      console.log('dp:', dp)
    }
  }

  // Return the minimum distance required to assign all robots to factories
  return dp[0][0];
};


let robot = [0, 4, 6]
let factory = [[2, 2], [6, 2]]
console.log(minimumTotalDistance(robot, factory))