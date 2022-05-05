function solution(places) {
  var answer = [];

  // 모든 P에 대해서
  for (let room of places) {
    answer.push(check(room));
  }

  return answer;
}

function check(arr) {
  let nr, nc;

  // 사방
  const dr = [-1, 0, 1, 0]; // URDL
  const dc = [0, 1, 0, -1];

  // 대각선
  //! HERE 방향 잘못 정의..
  const xr = [-1, 1, 1, -1]; // UR-DR-DL-UL
  const xc = [1, 1, -1, -1];

  for (let r = 0; r < 5; r++) {
    for (let c = 0; c < 5; c++) {
      if (arr[r][c] === 'P') {
        // 검사 진행, 위반이면 바로 끝
        let isX = new Array(5).fill(true); // 사방에 X 인지 여부, 배열의 범위에서 벗어면 undefined이므로 true로 초기화
        for (let i = 0; i < 4; i++) {
          nr = r + dr[i];
          nc = c + dc[i];
          if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5) {
            if (arr[nr][nc] === 'P') return 0; // false
            isX[i] = arr[nr][nc] === 'X';
          }
        }
        // isX[i+1]를 위해서 하나 더 추가 (% 연산을 줄이기 위해서)
        isX[4] = isX[0];
        // 대각선 방향들에 대해서 (맨해튼 거리 2)
        for (let i = 0; i < 4; i++) {
          nr = r + xr[i];
          nc = c + xc[i];
          if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5) {
            if (arr[nr][nc] === 'P') if (!isX[i] || !isX[i + 1]) return 0; // 두 곳 다 X가 아니면 위반
          }
        }

        // 수평 방향들에 대해서 (맨해튼 거리 2)
        for (let i = 0; i < 4; i++) {
          nr = r + dr[i] * 2;
          nc = c + dc[i] * 2;
          if (nr >= 0 && nr < 5 && nc >= 0 && nc < 5) {
            if (arr[nr][nc] === 'P') if (!isX[i]) return 0; // 중간에 X가 아니면 위반
          }
        }
      }
    }
  }
  return 1;
}

console.log(
  solution([
    ['POOOP', 'OXXOX', 'OPXPX', 'OOXOX', 'POXXP'],
    ['POOPX', 'OXPXP', 'PXXXO', 'OXXXO', 'OOOPP'],
    ['PXOPX', 'OXOXP', 'OXPOX', 'OXXOP', 'PXPOX'],
    ['OOOXX', 'XOOOX', 'OOOXX', 'OXOOX', 'OOOOO'],
    ['PXPXP', 'XPXPX', 'PXPXP', 'XPXPX', 'PXPXP'],
  ])
);
