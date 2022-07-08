/* [기본문제] 14번: 가장 긴 문자열 */
function solution(N, arr) {
  let max = 0;
  let answer;
  for (let e of arr) {
    if (e.length > max) {
      max = e.length;
      answer = e;
    }
  }
  return answer;
}

// 입력예제
console.log(solution(5, ['teacher', 'time', 'student', 'beautiful', 'good']));
