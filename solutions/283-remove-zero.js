/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var zeroIndex = findAllZeroIndex(nums),
        i = 0,
        j = 0;

    for (; i < zeroIndex.length; i++) {
        nums.splice(zeroIndex[i] - i, 1);
    }

    while (j < zeroIndex.length) {
        nums.push(0);
        j++;
    }
};

function findAllZeroIndex(nums) {
    var result = [];

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) result.push(i);
    }

    return result;
}

module.exports = moveZeroes;
