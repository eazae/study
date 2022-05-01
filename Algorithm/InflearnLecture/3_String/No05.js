/* [문자열 탐색] 4번: 문자열 압축 */
function solution(str) {
  let answer = str[0];

  // 문자 반복 횟수
  let streak = 0;
  let curr = str[0];
  for (let c of str) {
    if (c === curr) streak++;
    else {
      if (streak > 1) answer += streak;
      answer += c;
      curr = c;
      streak = 1;
    }
  }
  return answer;
}

/* 답안 */
// function solution(s) {
//   let answer = '';
//   let cnt = 1;
//   // 마지막 문자를 비교하기 위해서 빈 문자를 추가
//   s = s + ' ';
//   for (let i = 0; i < s.length - 1; i++) {
//     if (s[i] === s[i + 1]) cnt++;
//     else {
//       answer += s[i];
//       if (cnt > 1) answer += String(cnt);
//       cnt = 1;
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(solution('KKHSSSSSSSE'));
