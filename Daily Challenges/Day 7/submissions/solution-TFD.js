//Recursion
const fib = n => {
  if (n === 1 || n === 2) return 1;
  return fib(n - 1) + fib(n - 2);
};

//Dynamic Programming
const dpFib = (n, memo) => {
  if (memo[n] != null) {
    result = memo[n];
  }
  if (n === 0) {
    result = 0;
    memo[n] = result;
  } else if (n === 1 || n === 2) {
    result = 1;
    memo[n] = result;
  } else {
    result = dpFib(n - 1, memo) + dpFib(n - 2, memo);
    memo[n] = result;
  }

  return result;
};

//Test Case 1
console.log(fib(5));
// Output   => 5
// Expected => 5

//Test Case 2
let memo = [];
console.log(dpFib(12, memo));
// Output   => 144
// Expected => 144

//Print series
const printSeries = (n, memo) => {
  let num = dpFib(n, memo);
  let str = "";
  for (let i = 1; i < memo.length; i++) {
    str += memo[i] + " ";
  }
  return str;
};

let newMemo = [];
console.log(printSeries(12, newMemo));
