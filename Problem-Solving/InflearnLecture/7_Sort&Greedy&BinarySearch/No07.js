/* [정렬, 그리디, 결정알고리즘] 7번: 좌표 정렬 */
function solution(N, arr) {
  // sol1) 간단한 방식, 기본제공 함수 이용
  arr.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  // sol2) 직접 구현
  // TODO

  return arr;
}

/* 답안 */

// 입력예제
console.log(
  solution(5, [
    [2, 7],
    [1, 3],
    [1, 2],
    [2, 5],
    [3, 6],
  ])
);
