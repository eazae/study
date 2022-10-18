/* [Greedy] 2번: 조이스틱 */
function solution(name) {
  let answer = 0;

  const N = name.length;
  const controls = new Array(N);

  for (let i = 0; i < N; i++) {
    controls[i] = Math.min(name[i].charCodeAt() - 65, 90 - name[i].charCodeAt() + 1);
  }

  answer += controls.reduce((a, b) => a + b);

  let LTR = (RTL = fullLTR = fullRTL = 0);

  for (let i = 0; i < N; i++) {
    if (controls[i] !== 0) {
      if (i < Math.ceil(N / 2)) LTR = i;
      else if (RTL === 0) RTL = N - i;
      if (fullRTL === 0) fullRTL = i;
      fullLTR = i;
    }
  }

  // console.log(fullLTR, fullRTL, LTR, RTL);
  //! HERE
  answer += Math.min(fullLTR, N - fullRTL, LTR * 2 + RTL, LTR + RTL * 2);

  return answer;
}

// console.log(solution('JEROEN'));
// console.log(solution('JAN'));
// console.log(solution('ABABAAAAABA'));
console.log(solution('BBBAAB')); // 시도4 (RTL을 먼저)
console.log(solution('BAABBB')); //8
console.log(solution('AAABBBBBBBB')); // 시도5 (RTL로 full)
