/* [Brute Force] 7번: 최소직사각형 */
function solution(sizes) {
  let maxWidth = 0;
  let maxHeight = 0;

  for (let s of sizes) {
    let longer = 0;
    if (s[0] < s[1]) longer = 1;

    maxWidth = Math.max(maxWidth, s[longer]);
    maxHeight = Math.max(maxHeight, s[1 - longer]);
  }

  return maxWidth * maxHeight;
}

console.log(
  solution([
    [60, 50],
    [30, 70],
    [60, 30],
    [80, 40],
  ])
);
console.log(
  solution([
    [10, 7],
    [12, 3],
    [8, 15],
    [14, 7],
    [5, 15],
  ])
);
console.log(
  solution([
    [14, 4],
    [19, 6],
    [6, 16],
    [18, 7],
    [7, 11],
  ])
);
