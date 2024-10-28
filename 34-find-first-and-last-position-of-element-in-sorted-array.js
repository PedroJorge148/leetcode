/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let left = 0, right = nums.length - 1
    let start = -1, end = -1

    while (left <= right) {
      const mid = Math.floor((left + right) / 2)

      if (nums[mid] === target) {
        start = end = mid
        break;
      } else if (nums[mid] > target) {
        right = mid - 1
      } else {
        left = mid + 1
      }
      console.log(mid)
    }

    console.log(left, right)

    if (start !== -1) {
      while (start > 0 && nums[start -1] === target) {
        start--
      }
      while (end < nums.length - 1 && nums[end + 1] === target) {
        end++
      }
    }

    return [start, end]
};

let nums = [2,2,2,2,2,2]
let target = 2
console.log(searchRange(nums, target))