/* [1,2차원 배열 탐색] 7번: 봉우리 */
// //? 사방탐색
function solution(N, arr) {
  let answer = 0;
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (
        (r === 0 || arr[r][c] > arr[r - 1][c]) &&
        (r === N - 1 || arr[r][c] > arr[r + 1][c]) &&
        (c === 0 || arr[r][c] > arr[r][c - 1]) &&
        (c === N - 1 || arr[r][c] > arr[r][c + 1])
      )
        answer++;
    }
  }
  return answer;
}

/* 답안 */
// function solution(n, arr) {
//   let answer = 0;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       let flag = 1;
//       for (let k = 0; k < 4; k++) {
//         let nx = i + dx[k];
//         let ny = j + dy[k];
//         if (nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]) {
//           flag = 0;
//           break;
//         }
//       }
//       if (flag) answer++;
//     }
//   }

//   return answer;
// }

// 입력예제
console.log(
  solution(5, [
    [5, 3, 7, 2, 3],
    [3, 7, 1, 6, 1],
    [7, 2, 5, 3, 4],
    [4, 3, 6, 4, 1],
    [8, 7, 3, 5, 2],
  ])
);
