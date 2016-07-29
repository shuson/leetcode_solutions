/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [];
    
    nums1.forEach(function (e) {
        if(nums2.indexOf(e) > -1 && result.indexOf(e) < 0){
            result.push(e)
        }
    })
    
    return result;
};

module.exports = intersection;