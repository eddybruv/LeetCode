/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let romanMap = {
        "I": 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000
    }

    let i = 0;
    let j = 1;

    let count = 0

    while (i < s.length && j <= s.length) {
        const numI = romanMap[s[i]];
        const numJ = romanMap[s[j]];

        if (numI < numJ) {
            count += (numJ - numI);
            i += 2;
            j += 2;
        } else {
            count += numI;
            i += 1;
            j += 1;
        }
    }

    return count
};