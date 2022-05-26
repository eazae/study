/* [효율성 (투포인터 알고리즘, 슬라이딩 윈도우, 해쉬)] 4번: 연속 부분수열 2 */
function solution(N, M, arr) {
  let answer = 0;
  let start = (end = 0);
  let sum = arr[start];

  while (start < N && end < N) {
    if (sum <= M) {
      answer++;
      // console.log(start, end);
      sum += arr[end++];
    } else {
      sum = arr[start++];
      // end 갱신필요
      end = start;
    }
  }
  return answer;
}

/* 답안 */
// function solution(m, arr) {
//   let answer = 0,
//     sum = 0,
//     lt = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     while (sum > m) {
//       sum -= arr[lt++];
//     }
//     answer += rt - lt + 1;
//   }
//   return answer;
// }

// 입력예제
console.log(solution(5, 5, [1, 3, 1, 2, 3]));
