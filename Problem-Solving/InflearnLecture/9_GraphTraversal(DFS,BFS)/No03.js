/* [그래프와 탐색(DFS, BFS(넓이우선))] 3번: 미로탐색 (DFS) */
function solution(map) {
  let answer = 0;

  let isVisited = Array.from({ length: 7 }, () => new Array(7).fill(false));

  // 사방탐색
  const dr = [-1, 1, 0, 0];
  const dc = [0, 0, -1, 1];
  //! ERROR, see line 22
  // let nr, nc;

  function DFS(node) {
    isVisited[node.r][node.c] = true;
    if (node.r === 6 && node.c === 6) {
      answer++;
      return;
    }
    for (let i = 0; i < 4; i++) {
      //// nr = node.r + dr[i];
      //// nc = node.c + dc[i];
      //! ERROR 'nr', 'nc'를 for문 *안에서* 선언해야함! (값이 바뀌면 안됨)
      let nr = node.r + dr[i];
      let nc = node.c + dc[i];
      if (nr >= 0 && nr < 7 && nc >= 0 && nc < 7 && map[nr][nc] === 0 && !isVisited[nr][nc]) {
        DFS({ r: nr, c: nc });
        isVisited[nr][nc] = false;
      }
    }
  }
  DFS({ r: 0, c: 0 });
  return answer;
}

/* 답안 */
//? isVisited 배열을 따로 선언할 필요가 없이 한 번에 처리 가능 ('board' 배열에 직접 표현)
// function solution(board) {
//   let answer = 0;
//   let dx = [-1, 0, 1, 0];
//   let dy = [0, 1, 0, -1];
//   function DFS(x, y) {
//     if (x === 6 && y === 6) answer++;
//     else {
//       for (let k = 0; k < 4; k++) {
//         let nx = x + dx[k];
//         let ny = y + dy[k];
//         if (nx >= 0 && nx <= 6 && ny >= 0 && ny <= 6 && board[nx][ny] === 0) {
//           board[nx][ny] = 1;
//           DFS(nx, ny);
//           board[nx][ny] = 0;
//         }
//       }
//     }
//   }
//   board[0][0] = 1;
//   DFS(0, 0);
//   return answer;
// }

// 입력예제
console.log(
  solution([
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 1, 0, 0, 0],
    [1, 1, 0, 1, 0, 1, 1],
    [1, 1, 0, 0, 0, 0, 1],
    [1, 1, 0, 1, 1, 0, 0],
    [1, 0, 0, 0, 0, 0, 0],
  ])
);
