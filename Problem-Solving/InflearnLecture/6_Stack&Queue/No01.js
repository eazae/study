/* [자료구조 (스택, 큐)] 1번: 올바른 괄호 */
function solution(S) {
  let stack = [];
  for (let c of S) {
    if (c === '(') stack.push('(');
    else if (stack.length > 0) stack.pop();
    else return 'NO';
  }

  return stack.length === 0 ? 'YES' : 'NO';
}

/* 답안 */
// function solution(s) {
//   let answer = 'YES';
//   stack = [];
//   for (let x of s) {
//     if (x === '(') stack.push(x);
//     else {
//       if (stack.length === 0) return 'NO';
//       stack.pop();
//     }
//   }
//   if (stack.length > 0) return 'NO';
//   return answer;
// }

// 입력예제
console.log(solution('(()(()))(()'));
