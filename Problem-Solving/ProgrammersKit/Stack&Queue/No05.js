/* [Stack/Queue] 5번: 올바른 괄호 */
function solution(s) {
  if (s.length % 2 === 0 && s[0] === '(') {
    const N = s.length / 2;
    let opening = 0;
    for (let p of s) {
      if (opening > N) return false;

      if (p === '(') opening++;
      else if (opening > 0) opening--;
      else return false;
    }
    return opening === 0;
  } else return false;
}

console.log(solution('()()'))
console.log(solution('(())()'))
console.log(solution(')()('))
console.log(solution('(()('))