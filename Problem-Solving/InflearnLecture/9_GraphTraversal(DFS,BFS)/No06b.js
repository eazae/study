/* [그래프와 탐색(DFS, BFS(넓이우선))] 6번: 섬나라 아일랜드 (DFS 활용) */
function solution(N, map) {
  let answer = 0;

  //* 팔방탐색 (시계방향)
  const dr = [-1, -1, -1, 0, 1, 1, 1, 0];
  const dc = [-1, 0, 1, 1, 1, 0, -1, -1];
  // DFS와는 달리 전역에 선언 가능 (see No03.js)
  let nr, nc;

  let queue = [];

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (map[r][c] === 1) {
        //! 필수는 아니지만, 섬의 시작 노드도 0으로 표시해야 함
        // map[r][c] = 0;
        answer++;
        queue.push({ r: r, c: c });
        while (queue.length) {
          let node = queue.shift();
          for (let i = 0; i < 8; i++) {
            nr = node.r + dr[i];
            nc = node.c + dc[i];
            if (nr >= 0 && nr < N && nc >= 0 && nc < N && map[nr][nc] === 1) {
              map[nr][nc] = 0;
              queue.push({ r: nr, c: nc });
            }
          }
        }
      }
    }
  }
  return answer;
}

/* 답안 */
// function solution(board) {
//   let answer = 0;
//   let n = board.length;
//   let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//   let dy = [0, 1, 1, 1, 0, -1, -1, -1];
//   let queue = [];
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === 1) {
//         board[i][j] = 0;
//         queue.push([i, j]);
//         answer++;
//         while (queue.length) {
//           let x = queue.shift();
//           for (let k = 0; k < 8; k++) {
//             let nx = x[0] + dx[k];
//             let ny = x[1] + dy[k];
//             if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
//               board[nx][ny] = 0;
//               queue.push([nx, ny]);
//             }
//           }
//         }
//       }
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(
  solution(7, [
    [1, 1, 0, 0, 0, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 1, 0, 0],
    [1, 0, 1, 0, 1, 0, 0],
  ])
);
