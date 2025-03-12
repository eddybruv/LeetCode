// Last updated: 3/11/2025, 10:38:30 PM
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    let completedRow = new Set();
    let completedCol = new Set();
    let direction = 'col';
    let directionValRow = 1;
    let directionValCol = 1;

    let res = [];
    let row = 0, col = 0;
    let n = matrix.length * matrix[row].length;
    
    while(res.length < n){
        res.push(matrix[row][col]);
        if(direction == 'row' && !completedRow.has(row + directionValRow) && row < matrix.length - 1 && row >= 0){
            if(row == 0 && directionValRow == -1){
                completedCol.add(col);
                direction = 'col';
                col += directionValCol;
                directionValRow *= -1;
                continue;
            } else {
                row += directionValRow;
            }
        } else if(direction == 'row'){
            completedCol.add(col);
            direction = 'col';
            col += directionValCol;
            directionValRow *= -1;
            continue;
        }

        if(direction == 'col' && !completedCol.has(col + directionValCol) && col < matrix[row].length - 1 && col >= 0){
            if(col == 0 && directionValCol == -1){
                completedRow.add(row);
                direction = 'row';
                row += directionValRow;
                directionValCol *= -1;
            } else {
                //completedRow.add(row);
                col += directionValCol;
            }
            
        } else if(direction == 'col'){
            completedRow.add(row);
            direction = 'row';
            row += directionValRow;
            directionValCol *= -1;
        }
    }

    console.log(res);
    return res;
};