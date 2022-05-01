/* [완전탐색] 1번: 자리수의 합 */
function solution(N, arr) {
  let answer;
  let max = 0;

  let curr = 0;
  for (let e of arr) {
    e = String(e);
    for (let i of e) {
      curr += parseInt(i);
    }
    if (curr > max) {
      answer = e;
      max = curr;
    } else if (curr === max) {
      answer = Math.max(e, answer);
    }
    curr = 0;
  }
  return answer;
}

/* 답안 */
function solution(n, arr) {
  let answer,
    max = Number.MIN_SAFE_INTEGER;
  for (let x of arr) {
    let sum = 0,
      tmp = x;
    while (tmp) {
      sum += tmp % 10;
      tmp = Math.floor(tmp / 10);
    }
    if (sum > max) {
      max = sum;
      answer = x;
    } else if (sum === max) {
      if (x > answer) answer = x;
    }
  }
  return answer;
}

// 입력예제
console.log(solution(7, [128, 460, 603, 40, 521, 137, 123]));
