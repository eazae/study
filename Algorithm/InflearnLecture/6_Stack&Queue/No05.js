/* [자료구조 (스택, 큐)] 5번: 쇠막대기 */
function solution(input) {
  // let stack = [];
  // let prev;
  // for (let c of input) {
  //   if (stack.length <= 0) stack.push(c);
  //   else {
  //     prev = stack.pop();
  //     // if (c === '(' && prev === ')') stack.push(0); // 공백
  //     // else
  //     if (prev === '(' && c === ')') stack.push(1); // 레이저
  //     else stack.push(...[prev, c]);
  //   }
  // }

  // 공백 (마디) 처리
  //! 논리 오류 해결: 공백과, 레이저를 동시에 처리하면 안됨
  let refined = input.replaceAll('()', 1);
  refined = refined.replaceAll(')(', 0);

  let cnt = 0;
  let max = 0; // 막대의 높이
  let answer = 0;
  for (let x of refined) {
    if (x === '(') {
      cnt++;
      max = Math.max(max, cnt);
    } else if (x === ')') cnt--;
    else if (x === 1) answer = answer + cnt;
    else answer++; // x === 0
    console.log(x, cnt, answer);
  }

  // 마지막으로, 막대의 높이를 더한다
  // console.log(refined);
  return answer + max;
}

/* 답안 */

// 입력예제
console.log(solution('()(((()())(())()))(())'));
// console.log(solution('(((()(()()))(())()))(()())'));
