/**
 * @description Given a column title as appear in an Excel sheet, return its corresponding column number.
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var ss = s.toUpperCase(),
        arr = ss.split("").reverse(),
        result = 0;
    
    if(arr.length === 0) return result;

    arr.forEach(function(element, index) {
      result += (element.charCodeAt(0) - 64) * Math.pow(26, index);
    });

    return result;
};

module.exports = titleToNumber;