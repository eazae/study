/* [Dynamic Programming(동적계획법)] 4번: 동전교환 (Knapsack 알고리즘) */
//? Knapsack 알고리즘
function solution(N, coins, M) {
  //* DP 접근법: 1원부터 M원까지의 최소 동전 개수를 bottom-top 방식으로
  // const DP = new Array(M + 1).fill(0);
  // for (let i of coins) {
  //   DP[i] = 1;
  // }

  // for (let i = 1; i <= M; i++) {
  // DP[i] = DP[i-]
  // }

  //! FAIL
  let DP = new Array(M + 1).fill(Number.MAX_SAFE_INTEGER);

  DP[0] = 0;

  for (let i = 1; i < N; i++) {
    for (let j = coins[i]; j <= M; j++) {
      DP[j] = Math.min(DP[j], DP[j - coins[i]] + 1);
    }
  }

  return DP[M];
}

/* 답안 */
// function solution(m, coin) {
//   let answer = 0;
//   let dy = Array.from({ length: m + 1 }, () => 1000);
//   dy[0] = 0;
//   for (let i = 1; i < arr.length; i++) {
//  // 각 동전에 대해서, 그 동전의 배수마다 +1 해서 최소값을 저장
//     for (let j = coin[i]; j <= m; j++) {
//       dy[j] = Math.min(dy[j], dy[j - coin[i]] + 1);
//     }
//   }
//   answer = dy[m];
//   return answer;
// }

// 입력예제
console.log(solution(3, [1, 2, 5], 15));
