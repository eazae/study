/* [Brute Force] 3번: 카펫 */
function solution(brown, yellow) {
  var answer = [];

  let mul = brown + yellow;
  let sum = brown / 2 + 2;

  let x = 1, y;

  while(x <= sum / 2) {
    y = sum - x;
    if(x * y === mul) return [y, x];
    else x++;
  }

  return answer;
}

console.log(solution(10, 2));
console.log(solution(8, 1));
console.log(solution(24, 24));
