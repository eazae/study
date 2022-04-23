/* [1,2차원 배열 탐색] 6번: 격자판 최대합 */
function solution(N, arr) {
  // let sum = Array.from({ length: N }, () => 0);
  let rowSum = new Array(N).fill(0); // for each row
  let colSum = new Array(N).fill(0); // for each column
  let diagDesc = 0; // for diagonal \
  let diagAsc = 0; // for diagonal /

  for (let r = 0; r < N; r++) {
    diagDesc += arr[r][r];
    diagAsc += arr[r][N - r - 1];
    for (let c = 0; c < N; c++) {
      rowSum[r] += arr[r][c];
      colSum[c] += arr[r][c];
    }
    // max = Math.max(max);
  }
  return Math.max(Math.max(...rowSum), Math.max(...colSum), diagDesc, diagAsc);
}

/* 답안 */
// function solution(arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;
//   let sum1 = (sum2 = 0);
//   for (let i = 0; i < n; i++) {
//     sum1 = sum2 = 0;
//     for (let j = 0; j < n; j++) {
//      // 이렇게 한 번에 처리할 수 있음
//       sum1 += arr[i][j];
//       sum2 += arr[j][i];
//     }
//     answer = Math.max(answer, sum1, sum2);
//   }
//   sum1 = sum2 = 0;
//   for (let i = 0; i < n; i++) {
//     sum1 += arr[i][i];
//     sum2 += arr[i][n - i - 1];
//   }
//   answer = Math.max(answer, sum1, sum2);
//   return answer;
// }

// 입력예제
console.log(
  solution(5, [
    [10, 13, 10, 12, 15],
    [12, 39, 30, 23, 11],
    [11, 25, 50, 53, 15],
    [19, 27, 29, 37, 27],
    [19, 13, 30, 13, 19],
  ])
);
