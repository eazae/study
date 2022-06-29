/* [정렬, 그리디, 결정알고리즘] 2번: 버블 정렬 */
function solution(N, arr) {
  //! 범위를 sortedCnt < N - 1로 해야함
  //// for (let sortedCnt = 0; sortedCnt < N; sortedCnt++)
  for (let sortedCnt = 0; sortedCnt < N - 1; sortedCnt++)
    for (let i = 0; i < N - sortedCnt - 1; i++) {
      if (arr[i] > arr[i + 1]) [arr[i + 1], arr[i]] = [arr[i], arr[i + 1]];
    }
  return arr;
}

/* 답안 */
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(solution(6, [13, 5, 11, 7, 23, 15]));
