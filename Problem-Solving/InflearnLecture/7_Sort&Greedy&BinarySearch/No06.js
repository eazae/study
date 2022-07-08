/* [정렬, 그리디, 결정알고리즘] 6번: 장난꾸러기 현수 */
function solution(N, arr) {
  let answer1;
  let answer2;
  for (let i = 0; i < N - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      answer1 = i + 1;
      break;
    }
  }
  //// let answer2 = answer1 + 1;
  for (let i = answer1; i < N - 1; i++) {
    if (arr[i - 1] > arr[i]) {
      answer2 = i + 1;
      // i)이웃한 것끼리 바꿨을 경우 & ii)떨어진 것끼리 바꿨을 경우 2가지가 있으므로
      // break;를 없애야함 (default 정답은 i의 것으로 되게끔)
      //// break;
    }
  }
  return answer1 + ' ' + answer2;
}

/* 답안 */
//? sort()로 정렬을 따로 한 다음, 원본 배열과 다른 인덱스를 찾는 로직
//? (나의 solution과 답이 다를 수 있음. 문제조건모호, 넘어가자. input2 의 경우, 3 5 OR 4 5 출력)
// function solution(arr) {
//   let answer = [];
//   let sortArr = arr.slice();
//   sortArr.sort((a, b) => a - b);
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== sortArr[i]) answer.push(i + 1);
//   }
//   return answer;
// }

// 입력예제
console.log(solution(9, [120, 125, 152, 130, 135, 135, 143, 127, 160]));
console.log(solution(6, [120, 130, 150, 150, 130, 150])); // '3 5' OR '4 5'(my)
