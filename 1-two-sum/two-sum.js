/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // using hashmaps
    let map = {}
    for (let i = 0; i < nums.length; i++) {
        const find = target - nums[i];

        if (map.hasOwnProperty(find)) {
            return [map[find], i]
        }
        
        map[nums[i]] = i
    }
};