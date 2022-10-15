const { NotImplementedError } = require("../extensions/index.js");

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
function repeater(
  str,
  options = {
    repeatTimes: 0,
    separator: "+",
    addition: "",
    additionRepeatTimes: 0,
    additionSeparator: "|",
  }
) {
  let result = [];
  if (options.addition == "") {
    for (let i = 0; i < options.repeatTimes; i++) {
      result.push(str.toString());
      result.push(options.separator);
    }
    result.splice(-1);
  } else {
    for (let i = 0; i < options.repeatTimes; i++) {
      result.push(str);
      let stringToAdd = [];
      for (let j = 0; j < options.additionRepeatTimes; j++) {
        stringToAdd.push(options.addition.toString());
        stringToAdd.push(options.additionSeparator);
      }
      stringToAdd.splice(-1);
      result.push(...stringToAdd);
      result.push(options.separator);
    }
    result.splice(-1);
  }
  return result.join("");
}

module.exports = {
  repeater,
};
