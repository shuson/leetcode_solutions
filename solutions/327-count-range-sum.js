/**
 * Incorrect currently
 *
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function(nums, lower, upper) {
    if(lower === upper) return nums[upper];
    if(lower <= 0){
        var newNums = nums.slice(0, upper);
        return newNums.reduce(function(pre, nex){
            return pre + nex;
        })
    }
};

module.exports = countRangeSum;
