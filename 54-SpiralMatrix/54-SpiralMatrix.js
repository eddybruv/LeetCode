/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
  let res = []
  let matrixCopy = matrix

  let i = 0, j = 0

  while (matrixCopy.length && matrixCopy[0].length) {
    console.log("length", matrixCopy.length)
    //  Step 1: push top line and remove from matrix
    res.push(...matrixCopy[0])
    matrixCopy.shift()

    console.log("step 1", res, matrixCopy)


    // Step 2: push the last elements of each array in the matrix and remove those elements
    for (let k = 0; k < matrixCopy.length; k++) {
      if (!matrixCopy[k].length) continue
      console.log(matrixCopy.length)

      const lastElIndex = matrixCopy[k].length - 1
      res.push(matrixCopy[k][lastElIndex])
      matrixCopy[k].pop()
    }

    console.log("step 2", res, matrixCopy)

    // Step 3: remove last line in reverse order
    if (matrixCopy[0]) {
      res.push(...matrixCopy[matrixCopy.length - 1].reverse())
      matrixCopy.pop()
    }

    console.log("step 3", res, matrixCopy)


    // Step 4: remove first elements of each arr in reverse order
    if (matrixCopy[0]) {

      for (let k = matrixCopy.length - 1; k >= 0; k--) {
        if (!matrixCopy[k].length) continue
        res.push(matrixCopy[k][0])
        matrixCopy[k].shift()
        if (!matrixCopy[k].length) matrixCopy.splice(k, 1)
      }
    }

    console.log("step 4", res, matrixCopy)


  }

  return res
};
