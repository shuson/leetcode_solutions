/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    if (nums.length < 2) return [];

    for (var i = 0; i < nums.length; i++) {
        var rem = target - nums[i];
        var indexOfSec = nums.lastIndexOf(rem);

        if (indexOfSec > i) return [i + 1, indexOfSec + 1];
        if (i > indexOfSec && indexOfSec > -1) return [indexOfSec + 1, i + 1];
    }

    return [];
};

module.exports = twoSum;
