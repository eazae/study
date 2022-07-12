/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 6번: 바둑이 승차 (DFS) */
function solution(C, N, weights) {
  let max = 0;

  function subset(cnt, sum) {
    if (sum >= C) return;
    if (cnt === N) {
      max = Math.max(max, sum);
      return;
    }
    subset(cnt + 1, sum + weights[cnt]);
    subset(cnt + 1, sum);
  }

  subset(0, 0);
  return max;
}

/* 답안 */
// function solution(c, arr) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = arr.length;
//   function DFS(L, sum) {
//     if (sum > c) return;
//     if (L === n) {
//       answer = Math.max(answer, sum);
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }

// 입력예제
console.log(solution(256, 5, [81, 58, 42, 33, 61]));
