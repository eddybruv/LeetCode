/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let obj = {};

    for (const str of strs) {
        const sortedStr = str.split("").sort().join("");
        if (Object.hasOwn(obj, sortedStr)) {
            obj[sortedStr].push(str)
        } else {
            obj[sortedStr] = [str]
        }
    }
    return Object.values(obj)
};