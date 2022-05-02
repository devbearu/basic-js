const { NotImplementedError } = require('../extensions/index.js');

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
  const ns = n.toString();

  return Math.max(...ns.split("").map((_, i) => ns.slice(0, i) + ns.slice(i + 1)));
}

module.exports = {
  deleteDigit
};
