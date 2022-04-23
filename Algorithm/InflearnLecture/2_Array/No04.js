/* [1,2차원 배열 탐색] 4번: 점수계산 */
function solution(N, arr) {
  let streak = 0;
  let score = 0;
  for (let e of arr) {
    if (e === 1) {
      streak++;
      score += streak;
    } else {
      streak = 0;
    }
  }
  return score;
}

// 입력예제
console.log(solution(10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));
