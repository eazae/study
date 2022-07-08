/* [정렬, 그리디, 결정알고리즘] 11번: 뮤직비디오(결정알고리즘) */
function solution(N, M, arr) {
  let size = Math.ceil(arr.reduce((prev, curr) => prev + curr) / M);

  let pointer = 0;
  let cnt = 0;
  let tmp; // DVD에 들어갈 노래 길이

  // while (pointer < N) {
  while (true) {
    tmp = 0;
    while (tmp + arr[pointer] <= size) {
      tmp += arr[pointer++];
    }
    cnt++; // DVD 하나 씀
    if (pointer === N && cnt <= M) return size;
    else if (pointer === N) {
      cnt = 0;
      pointer = 0;
      size++;
    }
  }
}

/* 답안 */
//? 결정 알고리즘 (Decision algorithm)
// * `lt`(가장 긴 노래 길이) ————— `rt` (노래 길이 총합)
// * 이 둘 중간에 DVD 최소길이가 존재함
// * loop를 돌면서, lt와 rt의 중간값에서 시작을 해서 DVD 개수를 셀 것임
// * - 만약 DVD개수가 M개면, 답으로 반환하고,
// * - 그 이상이라면 rt를 중간값으로 줄이고 다시 탐색
// * - 그 이하라면 lt를 중간값으로 늘리고 다시 탐색
//    (즉 이분탐색 알고리즘을 적용)

// function count(songs, capacity) {
//   let cnt = 1,
//     sum = 0;
//   for (let x of songs) {
//     if (sum + x > capacity) {
//       cnt++;
//       sum = x;
//     } else sum += x;
//   }
//   return cnt;
// }

// function solution(m, songs) {
//   let answer;
//   let lt = Math.max(...songs);
//   let rt = songs.reduce((a, b) => a + b, 0);
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (count(songs, mid) <= m) {
//       answer = mid;
//       rt = mid - 1;
//     } else {
//       lt = mid + 1;
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(solution(9, 3, [1, 2, 3, 4, 5, 6, 7, 8, 9]));
