const { NotImplementedError } = require('../extensions/index.js');

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

  //есть поддельные даты

function getSeason(date) {
  if (!date || date == undefined || date == null) {
    return 'Unable to determine the time of year!'
  }
  if (!(date instanceof (Date))) {
    throw new Error("Invalid date!");
  } try {
    date.getTime();
  } catch (err) {
    throw new Error('Invalid date!');
  }

  let month = date.getMonth() + 1;

  if (month >= 3 && month <= 5) {
    return "spring";
  } else if (month >= 6 && month <= 8) {
    return "summer";
  } else if (month >= 9 && month <= 11) {
    return "fall";
  } else {
    return "winter"
  }

}
module.exports = {
  getSeason
};
