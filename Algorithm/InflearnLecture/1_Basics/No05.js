/* [기본문제] 5번: 최솟값 구하기 */
//? i) 반복문 사용 | ii) 내장 함수 이용
function solution(numbers) {
  // i) 반복문 이용
  let min = Math.min(...numbers);

  return min;
}

// /* 답안 */
// function solution(numbers) {
//   let answer;
//   // i) 반복문 사용
//   let min = Number.MAX_SAFE_INTEGER; // 9007199254740991
//   for (let i = 0; i < 7; i++) {
//     if (numbers[i] < min) min = numbers[i];
//   }
//   answer = min;

//   // ii) 내장 함수 이용: Math.min() - 배열의 원소들 중 최솟값을 구해줌
//   //! 주의: Math.min() 안에는 인자를 줘야됨 not Array객체!
//   answer = Math.min(numbers); // (X) NaN (Not a Number)
//   answer = Math.min(...numbers); // (O) Spread Operator(전개 연산자) 사용
//   answer = Math.min.apply(null, numbers); // (O) .apply() (전개연산자 사용하지 않는 방법, 2번째 param에 배열을 넘기면 된다)

//   return answer;
// }

// 입력예제
console.log(solution([5, 3, 7, 11, 2, 15, 17]));
