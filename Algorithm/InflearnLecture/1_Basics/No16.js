/* [기본문제] 16번: 중복문자제거 */
function solution(s) {
  const map = new Map();
  let answer = '';

  for (let c of s) {
    if (!map.get(c)) {
      answer += c;
      map.set(c, true); // 1이라든지 다른 값으로도 대체 가능. 0과 같이 falsy한 값만 아니면 됨
    }
  }
  return answer;
}

/* 답안 */
// //? String.indexOf()
// function solution(s) {
//   let answer = '';
//   //* 처음 발견되는 위치의 index를 return
//   //console.log(s.indexOf("k"));
//   //* 두번째 인자는, 1번째 이후로 발견되는 위치의 index를 return
//   //console.log(s.indexOf("k", 1));
//   for (let i = 0; i < s.length; i++) {
//     //console.log(s[i], i, s.indexOf(s[i]));
//     // 해당 문자의 최초 발견 위치와 동일할 경우, 아직 중복 X이므로 답에 append
//     if (s.indexOf(s[i]) === i) answer += s[i];
//   }
//   return answer;
// }

// 입력예제
console.log(solution('ksekkset'));
