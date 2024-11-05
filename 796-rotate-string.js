/**
 * Given two strings s and goal, return true if and only if s can become goal after some number of shifts on s.
 * A shift on s consists of moving the leftmost character of s to the rightmost position.
 * 
 * @param {string} s - The original string.
 * @param {string} goal - The target rotated string.
 * @return {boolean} - Returns true if `goal` is a rotation of `s`, false otherwise.
 */
var rotateString = function (s, goal) {
  // If `s` and `goal` have different lengths, they can't be rotations of each other.
  if (s.length !== goal.length) return false;

  // Concatenate `s` with itself. If `goal` is a rotation of `s`, it will appear in this new string.
  return (s + s).includes(goal);
};

// Example usage
let s = "abcde";
let goal = "cdeab";
console.log(rotateString(s, goal)); // Output: true
