/* [그래프와 탐색(DFS, BFS(넓이우선))] 2번: 경로 탐색 (인접리스트) */
//? 유향 그래프(Directed Graph) / 인접리스트
function solution(N, M, edges) {
  let answer = 0;

  //* 인접리스트 (Adjacent List)
  let adjacentList = Array.from({ length: N + 1 }, () => []);
  // 방문한 node 표현
  let isVisited = new Array(N + 1).fill(false);

  // 간선 표시
  for (let e of edges) {
    // 인덱스를 따로 -1 처리하지 않고 저장해봄 (9-1은 x)
    adjacentList[e[0]].push(e[1]);
  }
  //// console.log(adjacentList);

  function DFS(node) {
    // 방문 노드 표시를 이 위치에서 해도 되지만, 9-1의 코드처럼 재귀 전+후 에 선언하는 것이 더 직관적이어 보인다.
    // 하지만, DFS 호출부 이전(line 34) 방문표시 코드를 중복으로 선언해주지 않아도 된다는 장점
    isVisited[node] = true;
    if (node === N) {
      answer++;
      return;
    }
    for (let n of adjacentList[node]) {
      if (!isVisited[n]) {
        DFS(n);
        isVisited[n] = false;
      }
    }
  }

  DFS(1);
  return answer;
}

/* 답안 */
// function solution(n, arr) {
//   let answer = 0;
//   let graph = Array.from(Array(n + 1), () => Array());
//   let ch = Array.from({ length: n + 1 }, () => 0);
//   let path = [];
//   for (let [a, b] of arr) {
//     graph[a].push(b);
//   }
//   function DFS(v) {
//     if (v === n) {
//       answer++;
//       console.log(path);
//     } else {
//       for (let nv of graph[v]) {
//         if (ch[nv] === 0) {
//           path.push(nv);
//           ch[nv] = 1;
//           DFS(nv);
//           ch[nv] = 0;
//           path.pop();
//         }
//       }
//     }
//   }
//   ch[1] = 1;
//   path.push(1);
//   DFS(1);
//   return answer;
// }

// 입력예제
console.log(
  solution(5, 9, [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ])
);
