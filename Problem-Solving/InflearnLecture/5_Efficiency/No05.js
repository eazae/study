/* [효율성 (투포인터 알고리즘, 슬라이딩 윈도우, 해쉬)] 5번: 최대 매출 */
function solution(N, K, arr) {
  let sum = 0;
  for (let x = 0; x < K; x++) {
    sum += arr[x];
  }
  let answer = sum;
  for (let i = 1; i <= N - K; i++) {
    sum += arr[i + K - 1] - arr[i - 1];
    answer = Math.max(answer, sum);
  }
  return answer;
}

/* 답안 */
// function solution(k, arr) {
//   let answer,
//     sum = 0;
//   for (let i = 0; i < k; i++) sum += arr[i];
//   answer = sum;
//   for (let i = k; i < arr.length; i++) {
//     sum += arr[i] - arr[i - k];
//     answer = Math.max(answer, sum);
//   }
//   return answer;
// }

// 입력예제
console.log(solution(10, 3, [12, 15, 11, 20, 25, 10, 20, 19, 13, 15]));
