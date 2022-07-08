/* [기본문제] 15번: 가운데 문자 출력 */
function solution(word) {
  const len = word.length;
  return (len % 2 === 0 ? word.charAt(len / 2 - 1) : '') + word.charAt(len / 2);
}

/* 답안 */
// //? substring() 함수 이용
// function solution(s) {
//   let answer;
//   let mid = Math.floor(s.length / 2);
//   if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
//   else answer = s.substring(mid - 1, mid + 1);
//   //if(s.length%2===1) answer=s.substr(mid, 1);
//   //else answer=s.substr(mid-1, 2);
//   return answer;
// }

// 입력예제
console.log(solution('study'));
console.log(solution('good'));
