/* [Greedy] 1번: 체육복 */
function solution(n, lost, reserve) {
  var answer = -1; // n+1 크기로 잡았으므로

  const clothes = new Array(n + 1).fill(1);

  for (let l of lost) clothes[l] = 0;
  for (let r of reserve) clothes[r]++;

  for (let i = 1; i <= n; i++) {
    if (clothes[i] === 2) {
      if (clothes[i - 1] === 0) clothes[i - 1] = 1;
      else if (clothes[i + 1] === 0) clothes[i + 1] = 1;
    }
  }

  for (let c of clothes) if (c > 0) answer++;

  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5]));
