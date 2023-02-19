/**
 * @param {number} n
 * @return {number}
 */
var integerReplacement = function (n, c = 0) {
  if (n === 1) return c;

  if (n % 2 === 0) {
    return integerReplacement(n / 2, c + 1);
  } else {
    return Math.min(integerReplacement(n + 1, c + 1), integerReplacement(n - 1, c + 1));
  }
};
