const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
// function sortByHeight(arr) {
//   console.log(
//     arr.sort((a, b) => {
//       console.log(a, b);
//       if (a === -1 || b === -1) {

//       } else {
//         return a - b;
//       }
//     })
//   );
// }

function sortByHeight(arr) {
  const numbers = arr.filter((n) => n >= 0).sort((a, b) => a - b);

  return arr.map((n) => n >= 0 ? numbers.shift() : n);
}

module.exports = {
  sortByHeight
};
