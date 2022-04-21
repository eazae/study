/* [기본문제] 17번: 중복단어제거 */
function solution(N, arr) {
  // Map 사용
  const map = new Map();
  let answer = '';
  for (let e of arr) {
    if (!map.get(e)) {
      answer += e + '\n';
      map.set(e, true);
    }
  }
  return answer;
}

/* 답안 */
// //? String.prototype.indexOf() 활용2
// function solution(N, s) {
//   let answer;
//   //console.log(s.indexOf("student"));
//   answer = s.filter((v, i) => {
//     //console.log(v, i);
//     // 16번 문제와 마찬가지로, indexOf()로 반환되는 index 값이 현재 단어의 index값이 아니라면 중복단어라는 의미이므로, 답에서 제외
//     if (s.indexOf(v) === i) return v;
//   });

//   return answer;
// }

// 입력예제
console.log(solution(5, ['good', 'time', 'good', 'time', 'student']));
