function solution(salaries, days) {
  let answer = 0;
  for (let s of salaries) {
    answer += Math.floor(days / s[0]) * s[1];
    if (days % s[0] !== 0) answer += s[1];
  }

  return answer;
}

console.log(
  solution(
    [
      [2, 100],
      [3, 120],
      [4, 180],
      [7, 250],
    ],
    6
  )
);

console.log(
  solution(
    [
      [2, 1],
      [3, 2],
      [4, 3],
      [5, 4],
    ],
    1
  )
);

console.log(
  solution(
    [
      [1, 1000],
      [1, 1000],
    ],
    3650
  )
);
