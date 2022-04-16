/* [기본문제] 4번: 1부터 N까지의 합 출력하기 */
//? 반복문, 누적합
function solution(N) {
  // 반복문을 도는 대신 수식을 이용
  let sum = (N + 1) * Math.floor(N / 2);
  // N이 홀수인 경우 중간값을 더해줌
  sum += N % 2 === 0 ? 0 : Math.ceil(N / 2);

  return sum;
}

/* 답안 */
// function solution(n){
//   let answer=0;
//   for(let i=1; i<=n; i++){
//       answer=answer+i;
//   }

//   return answer;
// }

// 입력예제
console.log(solution(10));
console.log(solution(10));
