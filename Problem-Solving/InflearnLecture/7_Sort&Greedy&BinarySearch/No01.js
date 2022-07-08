/* [정렬, 그리디, 결정알고리즘] 1번: 선택 정렬 */
//? 선택 정렬 (Selection Sort)
function solution(N, arr) {
  let min, tmp, pointer;
  for (let i = 0; i < N; i++) {
    min = Number.MAX_SAFE_INTEGER;
    for (let j = i; j < N; j++) {
      if (min > arr[j]) {
        min = arr[j];
        pointer = j;
      }
    }
    // swap
    tmp = arr[pointer];
    arr[pointer] = arr[i];
    arr[i] = tmp;
  }
  return arr;
}

/* 답안 */
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     let idx = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[j] < arr[idx]) idx = j;
//     }
//     [arr[i], arr[idx]] = [arr[idx], arr[i]];
//   }
//   return answer;
// }

// 입력예제
console.log(solution(6, [13, 5, 11, 7, 23, 15]));
