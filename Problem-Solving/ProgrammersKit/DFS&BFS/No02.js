/* [DFS/BFS] 2번: 네트워크 */
function solution(n, computers) {
  var answer = 0;

  const isVisited = new Array(n).fill(false);
  let cnt = 0;

  const queue = [];
  queue.push(0);

  while (cnt < n) {
    for (let i = 0; i < n; i++)
      if (!isVisited[i]) {
        queue.push(i);
        isVisited[i] = true;
        cnt++;
        answer++;
        break;
      }
    while (queue.length > 0) {
      const node = queue.shift();
      for (let i = 0; i < n; i++) {
        if (i !== node && !isVisited[i] && computers[node][i] === 1) {
          isVisited[i] = true;
          cnt++;
          queue.push(i);
        }
      }
    }
  }

  return answer;
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
);

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
);
