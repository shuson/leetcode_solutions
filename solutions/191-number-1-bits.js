/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
    var s = (n >>> 0).toString(2)

    return s.replace(/0/g, "").length;
};

module.exports = hammingWeight;
