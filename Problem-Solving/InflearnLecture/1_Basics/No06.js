/* [기본문제] 6번: 최솟값 구하기 */
function solution(numbers) {
  let odds = [];

  numbers.forEach((e) => {
    if (e % 2 === 1) odds.push(e);
  });

  odds.sort((a, b) => a - b);
  console.log(odds);

  return odds.reduce((prev, curr) => prev + curr) + '\n' + odds[0];
}

/* 답안 */
// function solution(arr) {
//   let answer = [];
//   let sum = 0,
//      min = Number.MAX_SAFE_INTEGER;
//   //! for-of 문 사용 (index 방식 대신에)
//   for (let x of arr) {
//     if (x % 2 === 1) {
//       sum += x;
//       if (x < min) min = x;
//     }
//   }
//   answer.push(sum);
//   answer.push(min);
//   return answer;
// }

// 입력예제
console.log(solution([12, 77, 38, 41, 53, 92, 85]));
