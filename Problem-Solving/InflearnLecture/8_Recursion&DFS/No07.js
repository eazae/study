/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 7번: 최대점수 구하기 (DFS) */
function solution(N, M, problems) {
  let answer = 0;
  function subset(cnt, time, score) {
    if (time > M) return;
    if (cnt === N) {
      answer = Math.max(answer, score);
      return;
    }
    subset(cnt + 1, time + problems[cnt][1], score + problems[cnt][0]);
    subset(cnt + 1, time, score);
  }
  subset(0, 0, 0);
  return answer;
}

/* 답안 */
// function solution(m, ps, pt) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let n = ps.length;
//   function DFS(L, sum, time) {
//     if (time > m) return;
//     if (L === n) {
//       answer = Math.max(answer, sum);
//     } else {
//       DFS(L + 1, sum + ps[L], time + pt[L]);
//       DFS(L + 1, sum, time);
//     }
//   }

//   DFS(0, 0, 0);
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
