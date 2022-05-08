function solution(board) {
  var answer = 0;
  const N = board.length;

  const dr = [-1, 0, 1, 0];
  const dc = [0, 1, 0, -1];

  // let visited = new Array(N).fill(new Array(N).fill(false));

  let map = new Map();

  let nr, nc;

  let blockId = 0;

  let queue = [[0, 0]];
  let visited = [];
  for (let n = 0; n < N; n++) {
    visited.push(new Array(N).fill(false));
  }
  let newBoard = [];
  for (let n = 0; n < N; n++) {
    newBoard.push(new Array(N));
  }

  // 각 블록에 대해서
  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (!visited[r][c]) {
        blockId++;
        // map은 블록의 개수를 담고 있음
        map.set(blockId, 1);
        queue.push([r, c]); // 새로운 블록의 시작점
        while (queue.length > 0) {
          let [currR, currC] = queue.shift();
          let al = board[currR][currC];
          visited[currR][currC] = true;
          // 블록에 알파벳(중복됨) 대신 blockId로 표시
          newBoard[currR][currC] = blockId;
          // 사방탐색
          // if (!visited[r][c]) {
          for (let i = 0; i < 4; i++) {
            nr = currR + dr[i];
            nc = currC + dc[i];
            if (
              nr >= 0 &&
              nr < N &&
              nc >= 0 &&
              nc < N &&
              !visited[nr][nc] &&
              board[nr][nc] === al
            ) {
              queue.push([nr, nc]);

              map.set(blockId, map.get(blockId) + 1);
              visited[nr][nc] = true;
              newBoard[nr][nc] = blockId;
            }
          }
        }
      }
    }
  }

  console.log(map);

  let cnt;
  for (let r = 0; r < N; r++) {
    cnt = 0;
    let contain = new Map();
    for (let e of newBoard[r]) {
      if (!contain.get(e)) {
        contain.set(e, true);
        cnt += map.get(e);
      }
    }
    answer = Math.max(answer, cnt);
  }
  for (let c = 0; c < N; c++) {
    cnt = 0;
    let contain = new Map();
    for (let r = 0; r < N; r++) {
      let e = newBoard[r][c];
      if (!contain.get(e)) {
        contain.set(e, true);
        cnt += map.get(e);
      }
    }

    answer = Math.max(answer, cnt);
  }

  return answer;
}

console.log(solution(['ABBBBC', 'AABAAC', 'BCDDAC', 'DCCDDE', 'DCCEDE', 'DDEEEB']));
