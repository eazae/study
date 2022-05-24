/* [효율성 (투포인터 알고리즘, 슬라이딩 윈도우, 해쉬)] 2번: 공통원소 구하기 */
function solution(N, arr1, M, arr2) {
  let answer = [];
  // sort
  arr1.sort();
  arr2.sort();

  let p1 = (p2 = 0);
  while (p1 < N && p2 < M) {
    if (arr1[p1] === arr2[p2]) {
      answer.push(arr1[p1]);
      p1++;
      p2++;
    } else if (arr1[p1] < arr2[p2]) {
      while (p1 < N && arr1[p1] < arr2[p2]) p1++;
    } else if (arr1[p1] > arr2[p2]) {
      // 일부러 명시적으로 적음
      while (p2 < M && arr1[p1] > arr2[p2]) p2++;
    }
  }
  //* FIX: 불필요한 부분들이 있었음을 발견. while() 문 안에서 포인터를 증가시킬 필요가 없음을 깨달음
  // -> while 문 안에서 포인터가 범위에서 벗어나는지 검사도 별도로 안해도 된다.
  // 아래 '답안' 코드 참고
  return answer;
}

/* 답안 */
// function solution(arr1, arr2) {
//   let answer = [];
//   arr1.sort();
//   arr2.sort();
//   let p1 = (p2 = 0);
//   while (p1 < arr1.length && p2 < arr2.length) {
//     if (arr1[p1] == arr2[p2]) {
//       answer.push(arr1[p1++]);
//       p2++;
//     } else if (arr1[p1] < arr2[p2]) p1++;
//     else p2++;
//   }
//   return answer;
// }

// 입력예제
console.log(solution(5, [1, 3, 9, 5, 2], 5, [3, 2, 5, 7, 8]));
