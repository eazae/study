/* [자료구조 (스택, 큐)] 6번: 공주 구하기 */
function solution(N, K) {
  // N의 범위가 작으므로, 완탐으로 풀어도 됨
  let cnt = 0;
  let number = 0; // K번을 부르면 탈락
  let arr = new Array(N).fill(true);

  let idx = 0;
  while (cnt < N - 1) {
    if (arr[idx]) {
      number = (number % N) + 1; // 외친 번호 (실수: 나머지 연산 필요)
      if (number === K) {
        arr[idx] = false;
        cnt++; // 제외된 왕자의 수 증가
      }
    }
    idx = (idx + 1) % N; // 원형이므로
  }

  for (let i = 0; i < N; i++) {
    if (arr[i]) return i + 1;
  }
}

/* 답안 */
// function solution(n, k) {
//   let answer;
//   let queue = Array.from({ length: n }, (v, i) => i + 1);
//   while (queue.length) {
//     for (let i = 1; i < k; i++) queue.push(queue.shift());
//     queue.shift();
//     if (queue.length === 1) answer = queue.shift();
//   }
//   return answer;
// }

// 입력예제
console.log(solution(8, 3));
