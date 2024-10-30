/**
 * Finds the minimum number of elements to remove to make the array a mountain array.
 * A mountain array has an increasing sequence followed by a decreasing sequence.
 * 
 * @param {number[]} nums - The input array of numbers.
 * @return {number} - Minimum removals needed.
 */
var minimumMountainRemovals = function (nums) {
  const n = nums.length;
  const LIS = Array(n).fill(1); // Longest Increasing Subsequence ending at each index
  const LDS = Array(n).fill(1); // Longest Decreasing Subsequence starting at each index

  // Calculate LIS for each index
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        LIS[i] = Math.max(LIS[i], LIS[j] + 1);
      }
    }
  }

  // Calculate LDS for each index, going from right to left
  for (let i = n - 1; i >= 0; i--) {
    for (let j = n - 1; j > i; j--) {
      if (nums[i] > nums[j]) {
        LDS[i] = Math.max(LDS[i], LDS[j] + 1);
      }
    }
  }

  let maxMountainLength = 0;

  // Find the longest mountain sequence length
  for (let i = 1; i < n - 1; i++) {
    // Check if index `i` can be a peak in a mountain array (both LIS and LDS > 1)
    if (LIS[i] > 1 && LDS[i] > 1) {
      maxMountainLength = Math.max(maxMountainLength, LIS[i] + LDS[i] - 1);
    }
  }

  // Minimum removals is the total length minus the longest mountain sequence
  return n - maxMountainLength;
};

/**
 * Example
 * Consider an array like [2, 1, 4, 7, 3, 2, 5]:
 * For index 3 (value 7), it has lis[3] = 3 (increasing sequence [2, 4, 7]) and lds[3] = 3 (decreasing sequence [7, 3, 2]).
 * The mountain length at index 3 is 3 + 3 - 1 = 5, representing the sequence [2, 4, 7, 3, 2].
 */

let nums = [2, 1, 1, 5, 6, 2, 3, 1]
minimumMountainRemovals(nums)
// console.log(nums)
