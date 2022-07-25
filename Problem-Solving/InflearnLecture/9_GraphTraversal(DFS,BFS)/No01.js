/* [그래프와 탐색(DFS, BFS(넓이우선))] 1번: 경로 탐색 (인접행렬) */
//? 유향 그래프(Directed Graph) / 인접행렬
function solution(N, M, edges) {
  let answer = 0;
  //* 인접행렬 (Adjacent matrix)
  //? Array.from()을 활용한 배열의 초기화
  // const matrix = Array.from(new Array(N), () => new Array(N).fill(0)); // (아래와 동일)
  const matrix = Array.from({ length: N }, () => new Array(N).fill(0));

  // 간선 표현
  for (let e of edges) {
    matrix[e[0] - 1][e[1] - 1] = 1;
  }

  // BFS로는 불가? -> DFS
  let stack = [];
  stack.push(1);

  // 방문한 node 표현
  let isVisited = new Array(N).fill(false);
  isVisited[0] = true;

  //? 새로운 방식으로 DFS 구현 시도 (stack 사용)
  // while (stack.length > 0) {
  //   let node = stack.pop();
  //   isVisited[node - 1] = true;
  //   if (node === N) {
  //     answer++;
  //     //! 재귀 함수를 사용해야 함. return으로 처리해야되기 때문에
  //     // isVisited[node - 1] = false;
  //     // console.log(isVisited);
  //   } else
  //     for (let i = 0; i < N; i++) {
  //       if (matrix[node - 1][i] === 1 && !isVisited[i]) {
  //         // isVisited[i] = true;
  //         stack.push(i + 1);
  //       }
  //     }
  // }

  //? 재귀 함수 사용
  function DFS(node) {
    // console.log(isVisited);
    if (node === N) {
      answer++;
      return;
    }
    for (let i = 0; i < N; i++) {
      if (matrix[node - 1][i] === 1 && !isVisited[i]) {
        isVisited[i] = true;
        DFS(i + 1);
        isVisited[i] = false;
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
