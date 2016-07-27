/**
 * @description Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if (nums.length < 1) return 0;

    var i,
        index = 0;

    for(i = 1; i < nums.length; i++){
        if (nums[index] !== nums[i]) {
            nums[++index] = nums[i];
        }
    }

    return index + 1;
};

module.exports = removeDuplicates;