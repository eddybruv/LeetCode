/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {

    const fullRangeArr = range(0, nums.length);
    const sumFullRangeArr = fullRangeArr.reduce((a, b) => a + b, 0);
    const sumCurrentArr = nums.reduce((a, b) => a + b, 0)

    console.log(sumFullRangeArr, sumCurrentArr)
    return sumFullRangeArr - sumCurrentArr
};

const range = (start, stop) => {
    let arr = [start], b = start;
    while (b < stop) {
        b += 1;
        arr.push(b)
    }
    return arr
}