/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 2번: 재귀함수를 이용한 이진수 출력 */
function solution(N) {
  if (N === 1) return '1';
  return solution(parseInt(N / 2)) + (N % 2);
}

/* 답안 */
// function solution(n) {
//   let answer = '';
//   function DFS(n) {
//     if (n === 0) return;
//     else {
//       DFS(parseInt(n / 2));
//       answer += String(n % 2);
//     }
//   }
//   DFS(n);
//   return answer;
// }

// 입력예제
console.log(solution(11));
