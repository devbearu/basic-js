const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const stats = {};

  for (let domain of domains) {
    while (domain) {
      const sub = "." + domain.split(".").reverse().join(".");
      const dotIndx = domain.indexOf(".");

      stats[sub] = (stats[sub] || 0) + 1;
      domain = dotIndx !== - 1 ? domain.slice(dotIndx + 1) : "";
    }
  }

  return stats;
}

module.exports = {
  getDNSStats
};
