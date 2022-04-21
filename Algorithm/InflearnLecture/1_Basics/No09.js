/* [기본문제] 9번: A를 #으로 */
//? RegExp, String에 for-of, replace(), deep-copy
function solution(input) {
  // return input.replaceAll('A', '#');
  let answer = '';
  for (let v of input) {
    // console.log(v);
    if (v === 'A') answer += '#';
    else answer += v;
  }

  return answer;
}

/* 답안 */
function solution(s) {
  let answer = s;
  s = s.replace(/A/, '#');
  // 얕은 복사(주소참조) 아님, s를 바꾼다고 해서 answer가 바뀌지는 않음
  //* String은 참조가 되는 것이 아니라, 값이 복사가 되는 것이다.

  //! 전역으로 바꿔주는 option 부여
  answer = answer.replace(/A/g, '#');
  console.log(s);
  return answer;
}

// 입력예제
console.log(solution('BANANA'));
