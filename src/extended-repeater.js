const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
// function repeater(/* str, options */) {
//   throw new NotImplementedError('Not implemented');
//   // remove line with error and write your code here
// }

function repeater(str = 'STRING_OR_DEFAULT', { repeatTimes = 1, separator = '+', addition = '', additionRepeatTimes = 1, additionSeparator = '|' }) {
  let string = String(str);
  let result = "";

  for (i = 0; i < repeatTimes; i++) {
    result = `${result}${string}`;
    //console.log(result)
    for (let j = 0; j < additionRepeatTimes; j++) {
      if (j < additionRepeatTimes - 1) {
        result = `${result}${addition}${additionSeparator}`;
      } else {
        result = `${result}${addition}`;
      }
    }
    //console.log(result)
    if (i < repeatTimes - 1) {
      result = `${result}${separator}`;
    }
    //console.log(result)
  }
  return result;
}


module.exports = {
  repeater
};
