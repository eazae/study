/* [정렬, 그리디, 결정알고리즘] 4번: 삽입 정렬 */
function solution(N, arr) {
  for (let i = 1; i < N; i++) {
    let curr = arr[i];
    // pointer 앞의 원소들 사이에서 위치를 찾는다
    let j;
    for (j = i - 1; j >= 0; j--) {
      if (curr < arr[j]) {
        arr[j + 1] = arr[j];
      } else {
        //! ERROR: for loop 밖에 선언해야 함
        arr[j + 1] = curr;
        break;
      }
      //// if (j > 0 && arr[i] > arr[j - 1]) {
      ////   let tmp = arr[i];
      ////   pointer = i;
      ////   while (pointer > j) {
      ////     arr[pointer] = arr[pointer - 1];
      ////     pointer--;
      ////   }
      ////   arr[pointer] = tmp;
      ////   break;
      //// }
      //// }
    }
    arr[j + 1] = curr;
  }
  return arr;
}

/* 답안 */
//? 기본 구현: swap 시, 완전 swap을 할 필요가 없음을 주목
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length; i++) {
//     let tmp = arr[i],
//       j;
//     for (j = i - 1; j >= 0; j--) {
//       if (arr[j] > tmp) arr[j + 1] = arr[j];
//       else break;
//     }
//     arr[j + 1] = tmp;
//   }
//   return answer;
// }
//? JS Array API 사용
// function solution(arr) {
//   let answer = [];
//   answer.push(arr[0]);
//   for (let i = 1; i < arr.length; i++) {
//     for (let j = 0; j < answer.length; j++) {
//       if (arr[i] < answer[j]) {
//         answer.splice(j, 0, arr[i]);
//         break;
//       }
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(solution(6, [11, 7, 5, 6, 10, 9]));
