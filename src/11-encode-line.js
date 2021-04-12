/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const newStr = str.split('');
  let letters = [];
  let count = 1;
  for (let i = 0; i < newStr.length; i++) {
    if (newStr[i] === newStr[i + 1]) {
      count++;
    } else {
      const value = `${count}${newStr[i]}`;
      letters = [...letters, value];
      count = 1;
    }
  }
  return letters.join('');
}

module.exports = encodeLine;
