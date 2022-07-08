/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 1번: 재귀함수 */
function reqursive(n) {
  if (n === 0) return;
  reqursive(n - 1);
  console.log(n);
}

function solution(N) {
  reqursive(N);
}

/* 답안 */
// function solution(n) {
//   function DFS(L) {
//     if (L == 0) return;
//     else {
//       DFS(L - 1);
//       console.log(L);
//     }
//   }
//   DFS(n);
// }

// 입력예제
solution(3);
