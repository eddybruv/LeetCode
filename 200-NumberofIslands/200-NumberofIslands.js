// Last updated: 3/12/2025, 8:57:56 PM
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    if (!grid.length)
        return 0


    const bfs = (r, c) => {
        const queue = [];
        visit.add(pts(r, c))
        queue.push([r, c])

        while (queue.length) {
            [row, col] = queue.shift()
            const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]]

            for (let dir of directions) {
                [dr, dc] = dir;
                r = row + dr;
                c = col + dc;

                if ((r >= 0 && r < rows) && (c >= 0 && c < cols) && grid[r][c] === '1' && !visit.has(pts(r, c))) {
                    queue.push([r, c])
                    visit.add(pts(r, c))
                }
            }
        }
    }

    let count = 0;
    let rows = grid.length;
    let cols = grid[0].length;

    let visit = new Set();

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            let arr = [r, c]
            if (grid[r][c] === '1' && !visit.has(pts(r, c))) {
                bfs(r, c);
                count += 1
            }
        }
    }

    return count
};

// pointToString
const pts = (r, c) => {
    return `${r},${c}`
}