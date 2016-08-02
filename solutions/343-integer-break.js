/**
 * @Description Given a positive integer n, break it into the sum of at least two positive integers and maximize the product of those integers. Return the maximum product you can get.
 * @param {number} n
 * @return {number}
 */
var integerBreak = function(n) {
    if (n === 2) return 1;
    if (n === 3) return 2;

    var result = 1;

    while(n > 4) {
        result *= 3;
        n -= 3;
    }

    return result*n;
};

module.exports = integerBreak;