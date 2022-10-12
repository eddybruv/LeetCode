//arr of nums, target num, return indices of nums that add up to target

// bruteforce
function twoSum(nums: number[], target: number): number[] {
//     grab a num
    for (let i = 0; i < nums.length; i++) {
        for (let k = 0; k < nums.length; k++) {
            if (nums[i] + nums[k] === target && i !== k) {
                return [i, k];
            }
        }
    }
};