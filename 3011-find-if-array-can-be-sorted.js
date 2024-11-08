/**
 * Checks if the array `nums` can be sorted by only comparing bits.
 * Specifically, it checks if elements with the same number of 1-bits
 * are arranged in a way that they can be grouped and sorted.
 * 
 * @param {number[]} nums - An array of integers.
 * @return {boolean} - Returns true if the array can be considered "sortable" based on the bit pattern, false otherwise.
 */
var canSortArray = function (nums) {
  let prevMax = 0; // Maximum value in the previous group
  let currMin = 0, currMax = 0; // Minimum and maximum in the current group
  let prevBitCount = 0; // Number of 1-bits in the previous group

  for (const value of nums) {
    // Calculate the number of 1-bits in the binary representation of `value`
    const currentBitCount = value.toString(2).split('1').length - 1;
    console.log(value, ' | currentBitCount: ', currentBitCount); // Debug: Output the 1-bit count

    if (prevBitCount === currentBitCount) {
      // If current value has the same bit count as the previous group
      currMin = Math.min(currMin, value);
      currMax = Math.max(currMax, value);
    } else if (currMin < prevMax) {
      // If the current group's minimum is less than the previous group's maximum, sorting is not possible
      return false;
    } else {
      // Move to the next group and reset values
      prevMax = currMax;
      currMin = currMax = value;
      prevBitCount = currentBitCount;
    }
    console.log(prevMax, currMin, currMax, prevBitCount)

  }

  // Final check to ensure the last group's minimum is >= the previous group's maximum
  return currMin >= prevMax;
};

// Example usage
let nums = [8,4,2,30,15]
console.log(canSortArray(nums)); // Expected output: depends on the bit arrangement logic
