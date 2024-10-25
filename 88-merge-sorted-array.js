/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let r = m + n - 1
  m--
  n--
  while (m >= 0 && n >= 0) {
    if (nums1[m] > nums2[n]) {
      nums1[r] = nums1[m]
      m--
    } else {
      nums1[r] = nums2[n]
      n--
    }
    r--
  }

  while (n >= 0) {
    nums1[r] = nums2[n]
    r--
    n--
  }
}

merge([7, 8, 9, 0, 0, 0], 3, [2, 5, 6], 3) 