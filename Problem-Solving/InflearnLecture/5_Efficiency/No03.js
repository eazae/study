/* [효율성 (투포인터 알고리즘, 슬라이딩 윈도우, 해쉬)] 3번: 연속 부분수열 1 */
function solution(N, M, arr) {
  let answer = 0;
  // 처음부터 진행하면서, 누적합이 M보다 작으면 end 인덱스를 증가, 크면 start 인덱스를 증가시킴
  let start = (end = 0);
  let sum = arr[start];
  while (start < N && end < N) {
    if (sum === M) {
      answer++;
      // start++;
      // end++;
      sum = M - arr[start++] + arr[++end];
    } else if (sum < M) {
      sum += arr[++end];
    } else {
      sum -= arr[start++];
    }
  }
  return answer;
}

/* 답안 */
//? 슬라이딩 윈도우
// function solution(m, arr) {
//   let answer = 0,
//     lt = 0,
//     sum = 0;
//   for (let rt = 0; rt < arr.length; rt++) {
//     sum += arr[rt];
//     if (sum === m) answer++;
//     while (sum >= m) {
//       sum -= arr[lt++];
//       if (sum === m) answer++;
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(solution(8, 6, [1, 2, 1, 3, 1, 1, 1, 2]));
