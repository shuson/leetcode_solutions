/**
 * @description Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    var carry;
    
    while(b !== 0){
        carry = a & b
        a = a ^ b
        b = carry << 1
    }
    
    return a
};

module.exports = getSum;