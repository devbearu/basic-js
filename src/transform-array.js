const { NotImplementedError } = require('../extensions/index.js');

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
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  return arr.filter((n, i) => arr[i + 1] !== "--discard-prev"
    && arr[i - 1] !== "--discard-next")
    .map((n, i) => n === "--double-prev" && i > 0 ? arr[i - 1] : n
      && n === "--double-next" && i < arr.length - 1 ? arr[i + 1] : n
    )
    .filter((n) => !["--discard-prev", "--discard-next", "--double-prev", "--double-next"].includes(n));
}

module.exports = {
  transform
};
