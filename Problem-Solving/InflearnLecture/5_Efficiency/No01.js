/* [효율성 (투포인터 알고리즘, 슬라이딩 윈도우, 해쉬)] 1번: 두 배열 합치기 */
function solution(N, arr1, M, arr2) {
  // two pointer index
  let p1 = (p2 = 0);

  let answer = [];
  while (p1 < N && p2 < M) {
    if (arr1[p1] < arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
    } else {
      answer.push(arr2[p2]);
      p2++;
    }
  }

  // 나머지 남은 배열
  let left = p1 === N ? arr2.slice(p2) : arr1.slice(p1);
  answer.push(...left);

  return answer;
}

/* 답안 */
//? 투 포인터 알고리즘
// function solution(arr1, arr2) {
//   let answer = [];
//   let n = arr1.length;
//   let m = arr2.length;
//   let p1 = (p2 = 0);
//   while (p1 < n && p2 < m) {
//     if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
//     else answer.push(arr2[p2++]);
//   }
//   while (p1 < n) answer.push(arr1[p1++]);
//   while (p2 < m) answer.push(arr2[p2++]);
//   return answer;
// }

// 입력예제
console.log(solution(3, [1, 3, 5], 5, [2, 3, 6, 7, 9]));
