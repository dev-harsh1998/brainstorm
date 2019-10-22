// solution
const sumOfDigOfMatrix = (matrix, n) => {
  // @param n = Size of Matrix (N x N)

  let sum1 = (sum2 = 0);

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i === j) sum1 += matrix[i][j];

      if (i + j == n - 1) sum2 += matrix[i][j];
    }
  }

  if (sum1 >= sum2) return sum1 - sum2;
  else return sum2 - sum1;
};

// test input
let matrix = [[5, 2, 10, 2], [4, 3, 2, 5], [3, 5, 1, 7], [4, 7, 1, 4]];

// expected output = 0

// output = 0
console.log(sumOfDigOfMatrix(matrix, 4));
