/* [정렬, 그리디, 결정알고리즘] 8번: 회의실 배정 */
function solution(N, arr) {
  //! '답안'이 훨 간결. 이건 불필요한 연산이 들어가있게 된다.
  let answer = 0;
  // Greedy
  // pre) 정렬: 길이 순 -> 시작시간 순
  // 1. 가장 짧은 것부터 넣음
  // 2. 같은 길이라면, 제일 앞에 위치한 것부터
  arr.sort((a, b) => {
    if (a[1] - a[0] === b[1] - b[0]) return a[0] - b[0];
    else return a[1] - a[0] - (b[1] - b[0]);
  });

  let schedule = [];
  let isOccupied;

  for (let e of arr) {
    isOccupied = false;
    for (let i = e[0] + 1; i < e[1]; i++) {
      if (schedule[i] === true) {
        isOccupied = true;
        break;
      }
    }
    if (!isOccupied) {
      answer++;
      for (let i = e[0]; i <= e[1]; i++) {
        schedule[i] = true;
      }
    }
  }
  return answer;
}

/* 답안 */
// function solution(meeting) {
//   let answer = 0;
//   meeting.sort((a, b) => {
//     if (a[1] === b[1]) return a[0] - b[0];
//     else return a[1] - b[1];
//   });
//   let et = 0;
//   for (let x of meeting) {
//     if (x[0] >= et) {
//       answer++;
//       et = x[1];
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(
  solution(5, [
    [1, 4],
    [2, 3],
    [3, 5],
    [4, 6],
    [5, 7],
  ])
);
console.log(
  solution(3, [
    [3, 3],
    [1, 3],
    [2, 3],
  ])
);
