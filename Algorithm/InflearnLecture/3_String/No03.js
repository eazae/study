/* [문자열 탐색] 3번: 숫자만 추출 */
function solution(str) {
  let answer = '';
  for (let c of str) {
    if (c >= '0' && c <= '9') {
      answer += c;
    }
  }
  // 앞의 '0'들을 제거하기 위해 숫자로 변환 후 string으로 재변환..
  return new Number(answer).toString();
}

/* 답안 */
//? 내장 함수 사용
function solution(str) {
  let answer = '';
  for (let x of str) {
    // isNaN() 함수: Number인지 여부 검사
    if (!isNaN(x)) answer += x;
  }
  // parseInt()를 사용해서 앞의 '0'들을 제거 후 반환
  return parseInt(answer);
}

// 입력예제
console.log(solution('g0en2T0s8eSoft'));
