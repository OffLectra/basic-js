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
  let searchDigit = [];
  let number = n.toString();

  for (let i = 0; i < number.length; i++) {
    searchDigit.push(number.slice(0, i) + number.slice(i + 1));
  }
  for (let digit of searchDigit) {
    digit = +digit;
  }
  searchDigit.sort((a, b) => b - a);
  return +searchDigit[0];
}

module.exports = {
  deleteDigit
};
