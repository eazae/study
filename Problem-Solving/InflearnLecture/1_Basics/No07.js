/* [기본문제] 7번: 10부제 */
function solution(day, numbers) {
  let cnt = numbers.filter((e) => (e - day) % 10 === 0);
  return cnt.length;
}

/* 답안 */
// function solution(day, arr) {
//   let answer = 0;
//   for (let x of arr) {
//     if (x % 10 == day) answer++;
//   }

//   return answer;
// }

// 입력예제
console.log(solution(3, [25, 23, 11, 47, 53, 17, 33]));
console.log(solution(0, [12, 20, 54, 30, 87, 91, 30]));
