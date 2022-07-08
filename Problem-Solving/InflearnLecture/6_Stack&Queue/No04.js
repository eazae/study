/* [자료구조 (스택, 큐)] 4번: 후위식 연산 (postfix) */
function solution(formula) {
  let stack = [];

  for (let c of formula) {
    if (c > 0 && c < 10) {
      stack.push(Number(c));
    } else {
      switch (c) {
        case '+':
          stack.push(Number(stack.pop()) + Number(stack.pop()));
          break;
        case '-':
          stack.push(-Number(stack.pop()) + Number(stack.pop()));
          break;
        case '*':
          stack.push(Number(stack.pop()) * Number(stack.pop()));
          break;
        case '/':
          let tmp = Number(stack.pop());
          stack.push(Number(stack.pop()) / tmp);
          break;
      }
    }
    console.log(stack);
  }
  return stack[0];
}

/* 답안 */
// function solution(s) {
//   let answer;
//   let stack = [];
//   for (let x of s) {
//     if (!isNaN(x)) stack.push(Number(x));
//     else {
//       let rt = stack.pop();
//       let lt = stack.pop();
//       if (x === '+') stack.push(lt + rt);
//       else if (x === '-') stack.push(lt - rt);
//       else if (x === '*') stack.push(lt * rt);
//       else if (x === '/') stack.push(lt / rt);
//     }
//   }
//   answer = stack[0];
//   return answer;
// }

// 입력예제
console.log(solution('352+*9-'));
