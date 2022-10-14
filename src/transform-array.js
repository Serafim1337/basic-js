const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  let controls = [
    "--discard-next",
    "--discard-prev",
    "--double-next",
    "--double-prev",
  ];
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }
  let copy = arr.slice();
  for (let i = 0; i < copy.length; i++) {
    if (controls.includes(copy[i])) {
      switch (copy[i]) {
        case controls[0]:
          copy.splice(i, 2);
          break;
        case controls[1]:
          if (copy[i - 1]) {
            copy.splice(i - 1, 2);
          } else {
            copy.splice(i, 1);
          }
          break;
        case controls[2]:
          if (copy[i + 1]) {
            copy.splice(i, 1, copy[i + 1]);
          } else {
            copy.splice(i, 1);
          }
          break;
        case controls[3]:
          if (copy[i - 1]) {
            copy.splice(i, 1, copy[i - 1]);
          } else {
            copy.splice(i, 1);
          }
          break;
      }
    }
  }
  return copy;
}

module.exports = {
  transform,
};
