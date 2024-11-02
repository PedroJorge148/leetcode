/**
 * @param {string} sentence
 * @return {boolean}
 */
var isCircularSentence = function (sentence) {
  let n = sentence.length

  if (sentence[0] !== sentence[n - 1]) return false

  for (let i = 0; i < n; i++) {
    if (sentence[i] === ' ') {
      if (sentence[i - 1] !== sentence[i + 1]) return false
    }
  }

  return true
};

let sentence = "MuFoevIXCZzrpXeRmTssj lYSW U jM"
console.log(isCircularSentence(sentence))