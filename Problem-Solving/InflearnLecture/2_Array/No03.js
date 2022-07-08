/* [1,2차원 배열 탐색] 3번: 가위, 바위, 보 */
function solution(N, A, B) {
  54;
  let answer = '';
  for (let i = 0; i < N; i++) {
    if (A[i] - B[i] === 1 || (A[i] === 1 && B[i] === 3)) answer += 'A';
    else if (A[i] === B[i]) answer += 'D';
    else answer += 'B';
    answer += '\n';
  }
  return answer;
}

/* 답안 */
// function solution(a, b) {
//   let answer = '';
//   for (let i = 0; i < a.length; i++) {
//     if (a[i] === b[i]) answer += 'D ';
//     else if (a[i] === 1 && b[i] === 3) answer += 'A ';
//     else if (a[i] === 2 && b[i] === 1) answer += 'A ';
//     else if (a[i] === 3 && b[i] === 2) answer += 'A ';
//     else answer += 'B ';
//   }

//   return answer;
// }

// 입력예제
console.log(solution(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]));
