/* [Stack/Queue] 4번: 같은 숫자는 싫어 */
function solution(arr) {
  const stack = [];

  let last = -1;
  for (let a of arr) {
    // if (stack.at(-1) !== a) stack.push(a);
    if (last !== a) stack.push(a)
    last = a;
  }

  return stack;
}

console.log(solution([1, 1, 3, 3, 0, 1, 1]))