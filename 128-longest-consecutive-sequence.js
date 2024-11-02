/**
 * Finds the length of the longest consecutive sequence in an unsorted array.
 *
 * @param {number[]} nums - Array of numbers.
 * @return {number} - Length of the longest consecutive sequence.
 */
var longestConsecutive = function (nums) {
  const uniqueNums = new Set(nums);  // Store unique elements for quick lookup
  let longestStreak = 0;

  // Iterate over each number in the array
  for (let num of nums) {
    // Check if `num` is the start of a sequence
    if (!uniqueNums.has(num - 1)) {
      let currentNum = num;
      let currentStreak = 1;

      // Count consecutive numbers starting from `num`
      while (uniqueNums.has(currentNum + 1)) {
        currentNum++;
        currentStreak++;
      }

      // Update the longest streak found
      longestStreak = Math.max(longestStreak, currentStreak);
    }
  }

  return longestStreak;
};


let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
console.log(longestConsecutive(nums))