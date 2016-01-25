/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {

    while (num > 9) {
        num = splitDigits(num);
    }

    return num;
};

function splitDigits(num) {
    var sum = 0,
        rem;

    while (num >= 1) {
        rem = num % 10;
        sum += rem;
        num = (num - rem) / 10;
    }

    return sum;
}

module.exports = addDigits;
