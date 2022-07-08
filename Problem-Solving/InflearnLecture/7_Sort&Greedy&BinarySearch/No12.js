/* [정렬, 그리디, 결정알고리즘] 12번: 마구간 정하기(결정알고리즘) */
// 간격 이상의 거리마다 말을 배치할 수 있는지 여부
function check(arr, distance) {
  let prev = arr[0];
  let cnt = 1; // 배치한 말의 마리수
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - prev >= distance) {
      cnt++;
      prev = arr[i];
      //// break;
    }
  }
  // console.log(distance, cnt);
  return cnt; // 말이 해당 간격으로 배치 가능
}

function solution(N, M, arr) {
  let answer = 0;
  55;
  arr.sort((a, b) => a - b);
  let lt = 1;
  let rt = Math.ceil(arr[N - 1] - arr[0] / M);

  let mid;
  while (lt <= rt) {
    mid = Math.ceil((rt + lt) / 2);
    if (check(arr, mid) >= M) {
      lt = mid + 1;
      //! 로직 상, max 값을 구하지 않아도 됨
      //* -> answer = mid;
      answer = Math.max(answer, mid);
    } else {
      rt = mid - 1;
    }
  }

  return answer;
}

/* 답안 */
//? 결정 알고리즘
// function count(stable, dist) {
//   let cnt = 1,
//     ep = stable[0];
//   for (let i = 1; i < stable.length; i++) {
//     if (stable[i] - ep >= dist) {
//       cnt++;
//       ep = stable[i];
//     }
//   }
//   return cnt;
// }
// function solution(c, stable) {
//   let answer;
//   stable.sort((a, b) => a - b);
//   let lt = 1;
//   let rt = stable[stable.length - 1];
//   while (lt <= rt) {
//     let mid = parseInt((lt + rt) / 2);
//     if (count(stable, mid) >= c) {
//       answer = mid;
//       lt = mid + 1;
//     } else rt = mid - 1;
//   }
//   return answer;
// }

// 입력예제
console.log(solution(5, 3, [1, 2, 8, 4, 9]));
