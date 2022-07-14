/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 11번: 팩토리얼 */
function solution(N) {
  let answer = 1;
  function factorial(n) {
    if (n === 1) return;
    answer *= n;
    factorial(n - 1);
  }
  factorial(N);
  return answer;
}

/* 답안 */
// function solution(n) {
//   let answer;
//   function DFS(n) {
//     if (n === 1) return 1;
//     else return n * DFS(n - 1);
//   }
//   answer = DFS(n);
//   return answer;
// }

// 입력예제
console.log(solution(5));
