/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var ind = digits.length - 1;
  var digit = (digits[ind] + 1) % 10;

  digits[ind] = digit;

  while (digit === 0) {
    digits[ind] = digit;

    if (ind > 0) {
      ind -= 1;
      digit = (digits[ind] + 1) % 10;
      if (digit !== 0) {
        digits[ind] += 1;
        digit = digits[ind];
      }
    } else {
      digits.splice(0, 0, 1);
      digit = 1;
    }
  }

  return digits;
};
