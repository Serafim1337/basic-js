const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let longString = s1> s2 ? s1 : s2;
  let shortString = longString == s1 ? s2 : s1;
  let counter = 0;
  let set = new Set();
  for(let char of shortString) {
    if(longString.includes(char) && !set.has(char)) {
      counter++;
      set.add(char);
    }
  }
  return counter;
}

module.exports = {
  getCommonCharacterCount
};
