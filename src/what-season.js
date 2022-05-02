const { NotImplementedError } = require('../extensions/index.js');

const SEASONS = ["winter", "spring", "summer", "autumn"];

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return "Unable to determine the time of year!";

  if (Object.getOwnPropertyNames(date).length > 0
    || !(date instanceof Date)
  ) {
    throw Error("Invalid date!");
  }

  const seasonId = Math.floor((date.getMonth() + 1) / 3 % 4);

  return SEASONS[seasonId];
}

module.exports = {
  getSeason
};
