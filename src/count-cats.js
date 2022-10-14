const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let catsCounter = 0;
  for(let array of matrix) {
    let cats = array.filter(item => item == '^^');
    catsCounter += cats.length;
  }
  return catsCounter;
}

module.exports = {
  countCats
};
