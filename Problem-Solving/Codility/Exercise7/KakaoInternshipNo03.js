function solution(K, A) {
  let start = 0;
  let end = K - 1;

  let max = Math.max(...A);
  let min = Math.min(...A);
  // console.log(max, min);
  const N = A.length;

  let answer = max - min;

  for (let idx = start + 1; idx < N; idx++) {
    max = Math.max(max, )
  }
  return answer;
}

console.log(solution(2, [5, 3, 6, 1, 3]));
