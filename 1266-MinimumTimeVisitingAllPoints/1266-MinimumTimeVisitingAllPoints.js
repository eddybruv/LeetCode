/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let count = 0;

    for (let i = 0; i < points.length - 1; i++) {
        let [x1, y1] = points[i];
        let [x2, y2] = points[i + 1];

        count += Math.max(Math.abs(y2 - y1), Math.abs(x2 - x1))

    }
    return count
};