/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 9번: 동전교환 */
function solution(N, coins, M) {
  // 큰 단위 순으로 정렬, 가지치기를 위해서
  coins.sort((a, b) => b - a);
  console.log(coins);
  let answer = Number.MAX_SAFE_INTEGER;

  function combination(cnt, sum) {
    if (sum > M || cnt > answer) return;
    else if (sum === M) answer = Math.min(answer, cnt);
    else for (let i = 0; i < N; i++) combination(cnt + 1, sum + coins[i]);
  }
  combination(0, 0);
  return answer;
}

/* 답안 */
// function solution(m, arr) {
//   let answer = Number.MAX_SAFE_INTEGER;
//   let n = arr.length;
//   function DFS(L, sum) {
//     if (sum > m) return;
//     if (L >= answer) return;
//     if (sum === m) {
//       answer = Math.min(answer, L);
//     } else {
//       for (let i = 0; i < n; i++) {
//         DFS(L + 1, sum + arr[i]);
//       }
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }

// 입력예제
console.log(solution(3, [1, 2, 5], 15));
