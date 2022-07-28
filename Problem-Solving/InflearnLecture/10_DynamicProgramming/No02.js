/* [Dynamic Programming(동적계획법)] 2번: 돌다리 건너기 */
function solution(N) {
  // N이 아닌 N+1 '이상'만큼을 뛰어야 함
  //?? 문제 이의제기: 마지막에 꼭 N+1개에 맞게 건너뛰지 않아도 되지 않는가? (일단은 pass)
  const DP = new Array(N + 2);
  DP[1] = 1; // 2
  DP[2] = 2; // 1+2 2+1 1+1+1

  for (let n = 3; n <= N + 1; n++) {
    DP[n] = DP[n - 1] + DP[n - 2];
  }
  return DP[N + 1];
}

/* 답안 */
// function solution(n) {
//   let answer = 0;
//   let dy = Array.from({ length: n + 2 }, () => 0);
//   dy[1] = 1;
//   dy[2] = 2;
//   for (let i = 3; i <= n + 1; i++) {
//     dy[i] = dy[i - 2] + dy[i - 1];
//   }
//   answer = dy[n + 1];
//   return answer;
// }

// 입력예제
console.log(solution(7));
