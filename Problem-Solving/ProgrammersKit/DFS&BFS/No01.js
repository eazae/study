/* [DFS/BFS] 1번: 타겟 넘버 */
function solution(numbers, target) {
  var answer = 0;
  const N = numbers.length;

  DFS(0, 0);

  function DFS(sum, curr) {
    if (curr === N) {
      if (sum === target) answer++;
      return;
    }
    DFS(sum - numbers[curr], curr + 1);
    DFS(sum + numbers[curr], curr + 1);
  }

  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 2));
