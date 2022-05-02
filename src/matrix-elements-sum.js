const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const columns = new Array(matrix[0].length).fill(1);
  let sum = 0;

  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      const n = matrix[i][j];

      if (n === 0 && columns[j] === 1) {
        columns[j] = 0;
      }

      if (columns[j] === 1) {
        sum += n;
      }
    }
  }

  return sum;
}

module.exports = {
  getMatrixElementsSum
};
