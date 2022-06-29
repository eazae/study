/* [정렬, 그리디, 결정알고리즘] 3번: Special Sort(구글 인터뷰) */
function solution(N, arr) {
  // // 양쪽 끝에 포인터를 각각 둬서, 왼쪽 포인터가 음수가 아니고, 오른쪽 포인터가 양수가 아니면 서로 swap 하는 로직
  // let left = 0,
  //   right = N - 1;
  // let isTarget = false; // 정렬해야되는 위치 찾았다는 flag

  // // 둘이 cross되는 순간 loop 탈출
  // while (left < right) {
  //   // 음수
  //   // if (arr[left] > 0)
  //   while (!isTarget)
  //     if (arr[left] > 0) isTarget = true;
  //     else left++;
  //   isTarget = false;
  //   // 양수
  //   while (!isTarget)
  //     if (arr[right] < 0) isTarget = true;
  //     else right--;
  //   isTarget = false;

  //   // swap
  //   console.log(left, right);
  //   [arr[right], arr[left]] = [arr[left], arr[right]];
  //   left++;
  //   right--;
  // }

  //! ‘양의 정수와 음의 정수의 순서에는 변함이 없어야 한다'라는 말을 놓침
  for (let i = 0; i < N; i++) {
    if (arr[i] > 0)
      for (let j = i; j < N; j++) {
        if (arr[j] < 0) {
          // i의 위치까지 계속 swap
          while (j > i) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
          }
          break;
        }
      }
  }
  return arr;
}

/* 답안 */
//? Bubble Sort - 더 효율적인 방식 (for-loop 2번으로 축소)
// function solution(arr) {
//   let answer = arr;
//   for (let i = 0; i < arr.length - 1; i++) {
//     for (let j = 0; j < arr.length - i - 1; j++) {
//       if (arr[j] > 0 && arr[j + 1] < 0) {
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//       }
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(solution(8, [1, 2, 3, -3, -2, 5, 6, -6]));
