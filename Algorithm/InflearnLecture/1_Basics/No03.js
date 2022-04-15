/* [기본문제] 3번: 연필 개수 */
//? 'Math' 객체
function solution(N) {
  // return Math.floor(N / 12) + 1;
  return Math.ceil(N / 12);
}

// 입력예제
console.log(solution(25));
console.log(solution(178));
