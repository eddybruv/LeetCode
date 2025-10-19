/**
 * @param {number[]} nums
 * @return {boolean}
 */
const containsDuplicate = (nums) => {
    const set = [...new Set(nums)];
    
    if (nums.length === (set).length) return false
    else return true
};