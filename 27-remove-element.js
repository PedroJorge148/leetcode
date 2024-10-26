/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let index = 0

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== val) {
      nums[index] = nums[i]
      index++
    }
  }

  console.log("🚀 ~ removeElement ~ nums:", nums)

  return index
};

const testRemoveElement = () => {
  // Define the test case
  let nums = [0, 1, 2, 2, 3, 0, 4, 2];
  let val = 2;
  let expectedNums = [0, 1, 3, 0, 4]; // Expected output with no '2's
  let k = expectedNums.length; // Expected length after removal

  // Run the function
  let resultLength = removeElement(nums, val);

  // Assert the length is correct
  console.assert(resultLength === k, `Expected length: ${k}, but got: ${resultLength}`);

  // Sort the resulting array's first `resultLength` elements for comparison
  nums = nums.slice(0, resultLength).sort((a, b) => a - b);
  expectedNums.sort((a, b) => a - b); // Sort expected array

  // Check each element matches the expected output
  for (let i = 0; i < k; i++) {
    console.assert(nums[i] === expectedNums[i], `Expected nums[${i}] to be ${expectedNums[i]}, but got: ${nums[i]}`);
  }

  console.log("All tests passed!");
};

// Run the test
testRemoveElement();