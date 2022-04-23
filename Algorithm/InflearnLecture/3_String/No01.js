/* [문자열 탐색] 1번: 회문 문자열 */
function solution(str) {
  let K = Math.floor(str.length / 2); // in case of odd length

  for (let i = 0; i < K; i++) {
    // ASCII code 이용
    let diff = str[i].charCodeAt() - str[str.length - i - 1].charCodeAt();
    if (diff !== 0 && Math.abs(diff) !== 32) return 'NO';
  }
  return 'YES';
}

/* 답안 */
// //? i) 문자열 전체를 소문자/대문자로 통일시켜 놓은 뒤에 비교, ii) reverse() 함수 사용
// function solution(s) {
//   let answer = 'YES';
//   // i) 내 풀이와 비슷
//   s = s.toLowerCase();
//   let len = s.length;
//   for (let i = 0; i < Math.floor(len / 2); i++) {
//     if (s[i] != s[len - i - 1]) return 'NO';
//   }

//   // ii) method 활용
//   // split(''): 문자 각각이 원소인 배열
//   // reverse(): 배열에 적용가능한 함수. reverse 시킴
//   // join(): 배열을 string으로 묶어줌
//   s = s.toLowerCase();
//   if (s.split('').reverse().join('') != s) return 'NO';
//   return answer;
// }

// 입력예제
console.log(solution('gooG'));
console.log(solution('goooG'));
console.log(solution('gooD'));
