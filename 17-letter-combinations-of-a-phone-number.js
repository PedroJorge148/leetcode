/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  // Base case: if digits are empty, return an empty array
  if (digits.length === 0) return [];
  
  // Mapping of digits to corresponding letters
  const lettersMap = {
      '2': ['a', 'b', 'c'],
      '3': ['d', 'e', 'f'],
      '4': ['g', 'h', 'i'],
      '5': ['j', 'k', 'l'],
      '6': ['m', 'n', 'o'],
      '7': ['p', 'q', 'r', 's'],
      '8': ['t', 'u', 'v'],
      '9': ['w', 'x', 'y', 'z']
  };
  
  // Array to hold the final results
  const result = [];
  
  // Backtracking function to generate combinations
  function backtrack(index, currentCombination) {
      // If the current combination has reached the length of digits, add to result
      if (index === digits.length) {
          result.push(currentCombination.join(''));
          return;
      }
      
      // Get the letters for the current digit
      const letters = lettersMap[digits[index]];
      
      // Recursively build combinations
      for (const letter of letters) {
          currentCombination.push(letter);            // Add letter to combination
          backtrack(index + 1, currentCombination);   // Move to the next digit
          currentCombination.pop();                   // Backtrack to previous state
      }
  }
  
  // Start backtracking from index 0 with an empty combination
  backtrack(0, []);
  
  return result;
};

// Test cases
console.log(letterCombinations("23")); // Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(""));   // Output: []
