/* [기본문제] 11번: 대문자 찾기 */
//? i) ASCII 코드, ii) String.prototype.toUpperCase() 사용, iii) 단순 문자열 비교
function solution(s) {
  let answer = 0;
  // iii)
  for (let c of s) {
    if (c >= 'A' && c <= 'Z') answer++;
  }
  return answer;
}

/* 답안 */
function solution(s) {
  let answer = 0;
  for (let x of s) {
    // i) ASCII 코드로 변환해주는 함수
    //! let num=x.charCodeAt();
    //if(num>=65 && num<=90) answer++;

    // ii)
    //* 대문자 변환 후와 전이 같다는 것은, 이미 대문자였다는 것이므로
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

// 입력예제
console.log(solution('KoreaTimeGood'));
