/* [정렬, 그리디, 결정알고리즘] 9번: 결혼식 */
function solution(N, times) {
  //! -> FAIL, 답안 참고

  let present = new Array(72).fill(0);
}

/* 답안 */
//? Greedy 알고리즘
// function solution(N, times) {
//   let answer = Number.MIN_SAFE_INTEGER;
//   let T_line = [];
//   //* concept) 원소를 도착 시간, 출발 시간으로 분리해서 정렬하는 것이 포인트
//   for (let x of times) {
//     T_line.push([x[0], 's']);
//     T_line.push([x[1], 'e']);
//   }
//   //* 정렬 시, 값이 같다면 끝 점을 우선으로 함 (이유: 먼저 답에서 감소를 해줘야 최댓값으로 안치기 때문에)
//   T_line.sort((a, b) => {
//     if (a[0] === b[0]) return a[1].charCodeAt() - b[1].charCodeAt();
//     else return a[0] - b[0];
//   });
//   // cnt 변수를 따로 둬서, 현재의 참석 인원을 추적하고 있게 함
//   let cnt = 0;
//   for (let x of T_line) {
//     //* 시작점이라면 참석인원 증가, 끝점이라면 참석인원 감소
//     if (x[1] === 's') cnt++;
//     else cnt--;
//     answer = Math.max(answer, cnt); // 답 갱신
//   }
//   return answer;
// }

// 입력예제
console.log(
  solution(5, [
    [14, 18],
    [12, 15],
    [15, 20],
    [20, 30],
    [5, 14],
  ])
);
