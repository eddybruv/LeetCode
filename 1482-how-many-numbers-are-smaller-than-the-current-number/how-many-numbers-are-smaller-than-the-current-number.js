/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    const temp = [...nums];
    nums.sort((a, b) => a-b);
    const obj = {};
    const res = [];

    for (let i = 0; i < nums.length; i++) {
        if (!obj.hasOwnProperty(nums[i])) obj[nums[i]] = i;
    }

    for (const num of temp) {
        res.push(obj[num]);
    }

    return res;
};
