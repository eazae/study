function solution(scores) {
  var answer = [];
  const N = scores.length;

  let total = [];
  for (let i = 0; i < N; i++) {
    total.push({ id: i + 1, score: scores[i][0] + scores[i][1] });
  }

  const p1 = scores.reduce((acc, curr) => acc + curr[0], 0);
  const p2 = scores.reduce((acc, curr) => acc + curr[1], 0);
  const hard = p1 === p2 ? -1 : p1 < p2 ? 0 : 1;
  total.sort((a, b) => {
    if (a.score === b.score) {
      if (hard !== -1) {
        return scores[b.id - 1][hard] - scores[a.id - 1][hard];
      } else {
        return a.id - b.id;
      }
    } else return b.score - a.score;
  });
  console.log(total);

  for (let i = 0; i < N; i++) {
    answer[total[i].id - 1] = i + 1;
  }

  return answer;
}

console.log(
  solution([
    [85, 90],
    [65, 67],
    [88, 87],
    [88, 87],
    [73, 81],
    [65, 89],
    [99, 100],
    [80, 94],
  ])
);

console.log(
  solution([
    [85, 90],
    [91, 87],
    [88, 87],
  ])
);
