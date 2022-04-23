/* [1,2차원 배열 탐색] 5번: 등수구하기 */
function solution(N, arr) {
  let answer = [];

  // Plan:
  // 100점 만점이라는 말이 없음
  let top = Math.max(...arr);
  let n = 0; // calculated students
  let cnt = 0; // same rank
  let rank = 1; // current celculating rank
  while (n < N) {
    for (let i = 0; i < N; i++) {
      if (arr[i] === top) {
        answer[i] = rank;
        cnt++;
      }
    }
    top--;
    rank += cnt; // increase rank num
    n += cnt;
    cnt = 0;
  }

  return answer;
}

/* 답안 */
// function solution(n, arr) {
//   //? 1차원 배열을 특정 값으로 초기화
//   let answer = Array.from({ length: n }, () => 1);
//   for (let i = 0; i < n; i++) {
//     for (let j = 0; j < n; j++) {
//       // j인덱스 위치에서보다 큰 것들의 개수를 담고 있는 셈
//       if (arr[j] > arr[i]) answer[i]++;
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(solution(5, [87, 89, 92, 100, 76]));
console.log(solution(5, [92, 92, 92, 100, 76]));
