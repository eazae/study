/* [그래프와 탐색(DFS, BFS(넓이우선))] 5번: 송아지 찾기 (BFS: 상태트리탐색) */
function solution(S, E) {
  let answer = Number.MAX_SAFE_INTEGER;

  // me: 문제에 "BFS: 상태트리탐색"이라고 기재되지 않았더라면 문제를 풀 수 있었을까
  let queue = [];
  queue.push(S);

  const dir = [-1, 1, 5];

  let cnt = 0;
  // 백트레킹(가지치기): 이미 방문한 공간이라면, 그 지점까지의 이동횟수의 최솟값으로 대체
  const isVisited = new Array(100000).fill(Number.MAX_SAFE_INTEGER);

  while (queue.length > 0) {
    let node = queue.shift();
    if (node === E) {
      //// console.log(cnt);
      //* Math.cbrt(): 세제곱근 구하는 함수
      answer = Math.min(answer, parseInt(Math.cbrt(cnt)));
    } else if (isVisited[node - 1] > cnt) {
      isVisited[node - 1] = cnt;
      for (let i = 0; i < 3; i++) {
        let n = node + dir[i];
        if (n > 0 && n <= 10000) queue.push(n);
        // cnt++;
      }
    }
    //! "node === E" 조건문에 걸리더라도 cnt에 +3 증가시켜줘야지 로직이 성립가능
    cnt += 3;
  }

  return answer;
}

/* 답안 */
// function solution(s, e) {
//   let ch = Array.from({ length: 10001 }, () => 0);
//   let dis = Array.from({ length: 10001 }, () => 0);
//   let queue = [];
//   queue.push(s);
//   ch[s] = 1;
//   dis[s] = 0;
//   while (queue.length) {
//     let x = queue.shift();
//     for (let nx of [x - 1, x + 1, x + 5]) {
//       if (nx === e) return dis[x] + 1;
//       if (nx > 0 && nx <= 10000 && ch[nx] === 0) {
//         ch[nx] = 1;
//         queue.push(nx);
//         dis[nx] = dis[x] + 1;
//       }
//     }
//   }
// }

// 입력예제
console.log(solution(5, 14));
console.log(solution(8, 3));
