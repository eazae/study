/* [Dynamic Programming(동적계획법)] 3번: 최대 부분 증가수열(LIS) */
//? LIS
function solution(N, arr) {
  // 우측 끝에서부터 시작, LIS를 구해서 그 길이와 맨 앞의 수를 담고 있게 한다.
  // 0행: LIS의 길이
  // 1행: 맨 앞 수(i.e. 가장 작은 수)
  const DP = Array.from({ length: 2 }, () => new Array(N));
  DP[0][N - 1] = 1;
  DP[1][N - 1] = arr[N - 1];

  // 우측 끝에서부터 시작한다
  for (let i = N - 2; i >= 0; i--) {
    // Step 1. LIS의 길이 앞의 것 DP memoization
    DP[0][i] = DP[0][i + 1];

    // Step 2. 왼쪽의 수가 (맨 앞 수보다) 더 작은 경우에는 LIS에 추가
    if (arr[i] < DP[1][i + 1]) DP[0][i]++;

    // Step 3. 왼쪽의 수가 작던 크던, LIS의 가장 앞 수(i.e. 가장 작은 수)를 현재 것으로 대체해야된다는 것은 공통코드
    DP[1][i] = arr[i];
    //* 아래와 동일한 의미
    //// if (arr[i] < DP[1][i + 1]) {
    ////   DP[0][i]++;
    ////   DP[1][i] = arr[i];
    //// } else {
    ////   DP[1][i] = arr[i];
    //// }
  }

  // console.log(DP);
  return DP[0][0];
}

/* 답안 */
//? 동일한 풀이 but LIS의 길이를 변수 하나만을 활용 (BETTER)
// function solution(arr) {
//   let answer = 0;
//   let dy = Array.from({ length: arr.length }, () => 0);
//   dy[0] = 1;
//   for (let i = 1; i < arr.length; i++) {
//     let max = 0;
//     for (let j = i - 1; j >= 0; j--) {
//       if (arr[j] < arr[i] && dy[j] > max) {
//         max = dy[j];
//       }
//     }
//     dy[i] = max + 1;
//     answer = Math.max(answer, dy[i]);
//   }
//   return answer;
// }

// 입력예제
console.log(solution(8, [5, 3, 7, 8, 6, 2, 9, 4]));
console.log(solution(9, [2, 7, 5, 8, 6, 4, 7, 12, 3]));
