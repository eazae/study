/* [기본문제] 13번: 대소문자 변환 */
function solution(s) {
  let answer = '';
  for (let c of s) {
    // i) 내장 함수 이용
    if (c === c.toUpperCase()) answer += c.toLowerCase();
    else answer += c.toUpperCase();
    // ii) ASCII 코드 이용
    if (c.charCodeAt() >= 65 && c.charCodeAt() <= 90) answer += c.toLowerCase();
    else answer += c.toUpperCase();
    // iii) 단순 비교연산자 이용
    if (c >= 'A' && c <= 'Z') answer += c.toLowerCase();
    else answer += c.toUpperCase();
  }
  return answer;
}

// 입력예제
console.log(solution('StuDY'));
