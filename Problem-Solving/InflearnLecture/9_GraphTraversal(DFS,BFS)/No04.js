/* [그래프와 탐색(DFS, BFS(넓이우선))] 4번: 넓이우선탐색 (BFS) */
//? BFS
function solution(N) {
  let answer = '';

  let queue = [];
  queue.push(1);

  while (queue.length > 0) {
    let node = queue.shift();
    answer += node + ' ';
    if (node * 2 < N) {
      queue.push(...[node * 2, node * 2 + 1]);
    }
  }
  return answer;
}

/* 답안 */
// function solution() {
//   let answer = '';
//   let queue = [];
//   queue.push(1);
//   while (queue.length) {
//     console.log(queue);
//     let v = queue.shift();
//     answer += v + ' ';
//     for (let nv of [v * 2, v * 2 + 1]) {
//       if (nv > 7) continue;
//       queue.push(nv);
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(solution(7));
