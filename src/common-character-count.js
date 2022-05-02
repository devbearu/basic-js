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
  return [...new Set(s1)].reduce((count, char) => {
    const size = Math.min(s1.split(char).length - 1, s2.split(char).length - 1);
    return count + size;
  }, 0);
}

module.exports = {
  getCommonCharacterCount
};
