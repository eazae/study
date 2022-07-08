/* [정렬, 그리디, 결정알고리즘] 10번: 이분검색 */
function solution(N, M, arr) {
  // let answer = 1;
  // // point) 실제 정렬을 하지 않아도 된다 (N의 범위로 유추)
  // for (let e of arr) {
  //   if (e < M) answer++;
  // }
  // return answer;

  //* BUT 문제의 목적은 '이분탐색'을 구현하는 것
  arr.sort((a, b) => a - b);

  let lt = 0;
  let rt = N - 1;
  let mid;
  while (true) {
    mid = arr[parseInt((lt + rt) / 2)];
    if (mid === M) return parseInt((lt + rt) / 2) + 1; // 인덱스가 아닌, "n번쨰"
    else if (mid < M) lt = parseInt((lt + rt) / 2) + 1;
    else rt = parseInt((lt + rt) / 2);
  }
}

/* 답안 */
//? 이분탐색
// function solution(target, arr) {
//   let answer;
//   arr.sort((a, b) => a - b);
//   let lt = 0,
//     rt = arr.length - 1;
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (arr[mid] === target) {
//       answer = mid + 1;
//       break;
//     } else if (arr[mid] > target) rt = mid - 1;
//     else lt = mid + 1;
//   }

//   return answer;
// }

// 입력예제
console.log(solution(8, 32, [23, 87, 65, 12, 57, 32, 99, 81]));
