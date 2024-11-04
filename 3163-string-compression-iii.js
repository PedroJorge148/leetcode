/**
 * @param {string} word
 * @return {string}
 */
var compressedString = function (word) {
  let comp = ''
  let ch = word[0]
  let count = 1
  for (let i = 1; i < word.length; i++) {
    if (word[i] === ch && count < 9) {
      count++
    } else {
      comp += count + ch
      ch = word[i]
      count = 1
    }
  }
  comp += count + ch

  return comp
};

// let word = "abcde"
let word = "aaaaaaaaaaaaaabb"
console.log(compressedString(word))