/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    var target = nums.length / 2,
        mark = 1,
        majority = nums[0];

    if (target < 1) return majority;

    nums.sort();

    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] === nums[i + 1]) {
            mark += 1;

            if (mark > target) {
                majority = nums[i];
                break;
            }

        } else {
            mark = 1;
        }
    }

    return majority;
};

module.exports = majorityElement;
