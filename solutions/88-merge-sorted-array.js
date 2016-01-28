/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    for (var i = m + n - 1; i >= 0; i--) {
        nums1[i] = (m !== 0 && (n === 0 || nums1[m - 1] > nums2[n - 1])) ? nums1[--m] : nums2[--n];
    }

    // for test purpose, return nums1.
    return nums1;
};

module.exports = merge;
