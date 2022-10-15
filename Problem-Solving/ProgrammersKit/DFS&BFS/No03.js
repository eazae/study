/* [DFS/BFS] 3번: 게임 맵 최단거리 */
function solution(maps) {
  var answer = Number.MAX_SAFE_INTEGER;
  const N = maps.length;
  const M = maps[0].length;

  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  const isVisited = Array.from({ length: N }, () => Array(M).fill(false));

  const start = { r: 0, c: 0 };
  isVisited[0][0] = true;
  DFS(start, 1);

  // while (stack.length > 0) {
  //   const curr = stack.pop();

  //   for (let d = 0; d < 4; d++) {
  //     let nr = curr.r + dr[d];
  //     let nc = curr.c + dc[d];
  //     if (nr >= 0 && nr < N && nc >= 0 && nc < M && !isVisited[nr][nc] && maps[nr][nc] === 1) {
  //       isVisited[nr][nc] = true;
  //       stack.push({ r: nr, c: nc });
  //       isVisited[nr][nc] = false;
  //     }
  //   }
  // }

  function DFS(curr, cnt) {
    if (curr.r === N - 1 && curr.c === M - 1) {
      answer = Math.min(answer, cnt);
      return;
    }

    for (let d = 0; d < 4; d++) {
      let nr = curr.r + dr[d];
      let nc = curr.c + dc[d];
      if (
        nr >= 0 &&
        nr < N &&
        nc >= 0 &&
        nc < M &&
        !isVisited[nr][nc] &&
        maps[nr][nc] !== 0 &&
        (maps[nr][nc] === 1 || maps[nr][nc] > cnt + 1)
      ) {
        isVisited[nr][nc] = true;
        maps[nr][nc] = cnt + 1;
        DFS({ r: nr, c: nc }, cnt + 1);
        isVisited[nr][nc] = false;
      }
    }
  }

  return answer < Number.MAX_SAFE_INTEGER ? answer : -1;
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
);
console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
);
