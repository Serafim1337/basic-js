const { NotImplementedError } = require("../extensions/index.js");

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
  let month;
  try {
    month = date.getMonth();
    if (!isFinite(month)) {
      throw "Invalid date!";
    }
  } catch (e) {
    console.error(e.message);
    return "Unable to determine the time of year!";
  }
  if (month <= 1 || month >= 11) {
    return "winter";
  } else if (month <= 4) {
    return "spring";
  } else if (month <= 7) {
    return "summer";
  } else {
    return "autumn";
  }
}

module.exports = {
  getSeason,
};
