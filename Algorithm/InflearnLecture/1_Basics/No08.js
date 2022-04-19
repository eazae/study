/* [기본문제] 8번: 일곱난쟁이 */
function solution(numbers) {
  const diff = -100 + numbers.reduce((acc, curr) => acc + curr);

  for (let i = 0; i < 8; i++) {
    //! WRONG: i+1로 잡아야 함
    //// for (let j = i; j < 9; j++) {
    for (let j = i + 1; j < 9; j++) {
      if (numbers[i] + numbers[j] === diff) {
        //! WRONG: splice()가 되면, index가 하나씩 당겨지기 때문에, 순서를 뒤바꿔야 함
        //// numbers.splice(i, 1);
        //// numbers.splice(j, 1);
        numbers.splice(j, 1);
        numbers.splice(i, 1);
        return numbers;
      }
    }
  }
}

/* 답안 */
// function solution(arr) {
//   let answer = arr;
//   let sum = answer.reduce((a, b) => a + b, 0);
//   for (let i = 0; i < 8; i++) {
//     for (let j = i + 1; j < 9; j++) {
//       if (sum - (answer[i] + answer[j]) == 100) {
//         answer.splice(j, 1);
//         answer.splice(i, 1);
//       }
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(solution([20, 7, 23, 19, 10, 15, 25, 8, 13]));
