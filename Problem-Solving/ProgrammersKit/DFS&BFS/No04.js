/* [DFS/BFS] 4번: 단어 변환 */
function solution(begin, target, words) {
  const N = words.length;
  const len = begin.length;

  function checkTranformable(before, after) {
    let isTransformable = true;
    for (let i = 0; i < len; i++) {
      if (before[i] !== after[i]) {
        if (isTransformable) isTransformable = false;
        else return false;
      }
    }
    return true;
  }

  // target이 존재하는 경우에만 탐색진행
  for (let w of words)
    if (w === target) {
      let answer = Number.MAX_SAFE_INTEGER;
      const isVisited = new Array(N).fill(Number.MAX_SAFE_INTEGER);

      /* BFS */
      const queue = [{ word: begin, cnt: 0 }];
      while (queue.length > 0) {
        const before = queue.shift();
        for (let i = 0; i < N; i++) {
          if (isVisited[i] > before.cnt + 1 && checkTranformable(before.word, words[i])) {
            if (words[i] === target) {
              answer = Math.min(answer, before.cnt + 1);
            } else {
              queue.push({ word: words[i], cnt: before.cnt + 1 });
            }
            isVisited[i] = before.cnt + 1;
          }
        }
      }
      return answer;
      // break;
    }
  return 0;
}

console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log', 'cog']));
console.log(solution('hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']));
