/* [Dynamic Programming(동적계획법)] 1번: 계단오르기 */
//? 동적계획법
function solution(N) {
  const DP = new Array(N + 1);
  // base case
  DP[1] = 1;
  DP[2] = 2;

  for (let n = 3; n <= N; n++) {
    // 점화식을 다음과 같이 도출할 수 있다. (2개로 끝나는 방식 + 1개로 끝나는 방식)
    DP[n] = DP[n - 1] + DP[n - 2];
  }
  return DP[N];
}

/* 답안 */
// function solution(n) {
//   let answer = 0;
//   let dy = Array.from({ length: n + 1 }, () => 0);
//   dy[1] = 1;
//   dy[2] = 2;
//   for (let i = 3; i <= n; i++) {
//     dy[i] = dy[i - 2] + dy[i - 1];
//   }
//   answer = dy[n];
//   return answer;
// }

// 입력예제
console.log(solution(7));
