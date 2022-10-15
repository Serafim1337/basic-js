const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n.toString();
  console.log(str);
  let buf = 0;
  for (let i = 0; i < str.length; i++) {
    let currNumber = str.split("");
    currNumber.splice(i, 1);
    currNumber = parseInt(currNumber.join(""));
    // console.log(currNumber);
    buf = Math.max(buf, currNumber);
  }
  return buf;
}

module.exports = {
  deleteDigit,
};
