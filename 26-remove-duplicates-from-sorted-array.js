/**
 * Removes duplicates from a sorted array `nums` in-place
 * and returns the length of the unique elements.
 *
 * @param {number[]} nums - A sorted array of numbers with potential duplicates.
 * @return {number} - The number of unique elements in the modified array.
 */
var removeDuplicates = function(nums) {
  let j = 1; // Start from the first unique element

  // Iterate from the second element
  for (let i = 1; i < nums.length; i++) {
      // If the current element is different from the previous one
      if (nums[i] !== nums[i - 1]) {
          nums[j] = nums[i] // Place the unique element at the j position
          j++ // Increment the unique elements counter
      }
  }

  return j
};

let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
console.log(removeDuplicates(nums));
