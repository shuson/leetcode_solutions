/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var sArray = s.split("").sort(),
        tArray = t.split("").sort();

    return sArray.length === tArray.length && sArray.every(function (element, index) {
        return element === tArray[index];
    });
};

module.exports = isAnagram;
