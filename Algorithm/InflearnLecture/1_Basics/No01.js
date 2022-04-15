/* [기본문제] 1번: 세 수  중  최솟값 */
function solution(a, b, c) {
  let answer = a;

  if (answer > b) answer = b;
  if (answer > c) answer = c;

  // console.log(answer);
  return answer;
}

// 입력예제 1
solution(2, 5, 1);