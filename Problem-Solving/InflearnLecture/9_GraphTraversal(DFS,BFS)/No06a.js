/* [그래프와 탐색(DFS, BFS(넓이우선))] 6번: 섬나라 아일랜드 (DFS 활용) */
function solution(N, map) {
  let answer = 0;

  //* 팔방탐색 (시계방향)
  const dr = [-1, -1, -1, 0, 0, 1, 1, 1];
  const dc = [-1, 0, 1, 1, 1, 0, -1, -1];

  function DFS(node) {
    let nr, nc;
    for (let i = 0; i < 8; i++) {
      nr = node.r + dr[i];
      nc = node.c + dc[i];
      if (nr >= 0 && nr < N && nc >= 0 && nc < N && map[nr][nc] === 1) {
        map[nr][nc] = 0;
        DFS({ r: nr, c: nc });
      }
    }
  }

  for (let r = 0; r < N; r++)
    for (let c = 0; c < N; c++)
      if (map[r][c] === 1) {
        answer++;
        DFS({ r: r, c: c });
      }

  //// console.log(map);
  return answer;
}

/* 답안 */
// function solution(board) {
//   let answer = 0;
//   let n = board.length;
//   let dx = [-1, -1, 0, 1, 1, 1, 0, -1];
//   let dy = [0, 1, 1, 1, 0, -1, -1, -1];
//   function DFS(x, y) {
//     board[x][y] = 0;
//     for (let k = 0; k < 8; k++) {
//       let nx = x + dx[k];
//       let ny = y + dy[k];
//       if (nx >= 0 && nx < n && ny >= 0 && ny < n && board[nx][ny] === 1) {
//         DFS(nx, ny);
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       if (board[i][j] === 1) {
//         board[i][j] = 0;
//         answer++;
//         DFS(i, j);
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
