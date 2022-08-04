/* [Dynamic Programming(동적계획법)] 4번: 동전교환 (Knapsack 알고리즘) */
//? Knapsack 알고리즘
function solution(N, M, problems) {
  const DP = new Array(M + 1).fill(0);
  for (let i = 0; i < N; i++) {
    for (let j = problems[i][1]; j <= M; j++) {
      DP[j] = Math.max(DP[j], DP[j - problems[i][1]] + problems[i][0]);
    }
  }

  return DP[M];
}

/* 답안 */
// function solution(m, arr) {
//   let answer = 0;
//   let dy = Array.from({ length: m + 1 }, () => 0);
//   for (let i = 0; i < arr.length; i++) {
//     let ps = arr[i][0];
//     let pt = arr[i][1];
//     for (let j = m; j >= pt; j--) {
//       dy[j] = Math.max(dy[j], dy[j - pt] + ps);
//     }
//   }
//   answer = dy[m];
//   return answer;
// }

// 입력예제
console.log(
  solution(5, 20, [
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
);
