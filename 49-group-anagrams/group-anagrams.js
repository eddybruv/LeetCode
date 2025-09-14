/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let res = [];
    let obj = {};

    for (const str of strs) {
        let sortedStr = [...str.split('').sort()].join('');
        console.log(sortedStr)
        obj[sortedStr] = obj[sortedStr] ? [str, ...obj[sortedStr]] : [str];
    }

    return Object.values(obj)
};
