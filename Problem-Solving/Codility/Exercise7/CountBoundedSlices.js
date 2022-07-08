function solution(K, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  const N = A.length;
  let answer = N;

  let b;

  let min, max;
  let idx = 1;
  for (let a = 0; a < N; a++) {
    b = A[a];
    min = max = b;
    answer += idx - a + 1;
    for (let x = idx; x < N; x++) {
      max = Math.max(max, A[x]);
      min = Math.min(min, A[x]);
      if (Math.abs(max - min) <= K) {
        answer++;
      } else {
        idx = x;
        console.log(x);
        // answer += x - a - 1;
        break;
      }
    }
  }

  return answer;
}

console.log(solution(2, [3, 5, 7, 6, 3]));
