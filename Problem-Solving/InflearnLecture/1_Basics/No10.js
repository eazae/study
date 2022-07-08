/* [기본문제] 10번: 문자찾기 */
function solution(s, t) {
  let answer = 0;
  for (let c of s) {
    if (c === t) answer++;
  }
  return answer;
}

/* 답안 */
//? 내장 함수 사용
// function solution(s, t) {
//   // t를 구분자로 문자열을 배열로 반환함
//   let answer = s.split(t);

//   // 마지막에 구분자가 들어가있어도, 빈 문자열의 원소로 들어가진다. (편리)
//   console.log(answer); // [ 'COMPUTE', 'P', 'OG', 'AMMING', '', '', '' ]
//   return answer.length - 1;
// }

// 입력예제
console.log(solution('COMPUTERPROGRAMMING', 'R'));
console.log(solution('COMPUTERPROGRAMMINGRRR', 'R'));
