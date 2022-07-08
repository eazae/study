/* [완전탐색] 3번: 멘토링 */
function solution(N, M, arr) {
  let answer = 0;

  let isValid;
  let rankA, rankB;
  // mento
  for (let a = 1; a <= N; a++) {
    // mentee
    for (let b = 1; b <= N; b++) {
      if (a === b) continue;
      isValid = true;
      for (let m = 0; m < M; m++) {
        for (let n = 0; n < N; n++) {
          if (arr[m][n] === a) rankA = n;
          if (arr[m][n] === b) rankB = n;
        }
        if (rankA > rankB) {
          isValid = false;
          break;
        }
      }
      if (isValid) answer++;
    }
  }

  return answer;
}

/* 답안 */
// function solution(N, M, test) {
//   let answer = 0;
//   m = test.length;
//   n = test[0].length;
//   for (let i = 1; i <= n; i++) {
//     for (let j = 1; j <= n; j++) {
//       let cnt = 0;
//       for (let k = 0; k < m; k++) {
//         let pi = (pj = 0);
//         for (let s = 0; s < n; s++) {
//           if (test[k][s] === i) pi = s;
//           if (test[k][s] === j) pj = s;
//         }
//         if (pi < pj) cnt++;
//       }
//       if (cnt === m) answer++;
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(
  solution(4, 3, [
    [3, 4, 1, 2],
    [4, 3, 2, 1],
    [3, 1, 4, 2],
  ])
);
