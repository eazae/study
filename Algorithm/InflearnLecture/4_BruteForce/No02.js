/* [완전탐색] 2번: 뒤집은 소수 */
function solution(N, arr) {
  let reversed = [];
  for (let n of arr) {
    // 정수 뒤집기: string으로 변환 뒤에 배열로 변환 뒤에 reverse, 다시 정수로 변환하여 '0'제거
    n = parseInt(n.toString().split('').reverse().join(''));
    reversed.push(n);
  }
  // 소수 판단
  // 가장 큰 수까지만 구하고, 그 전의 소수들을 다 구해놓자
  let max = Math.max(...reversed);
  let prime = Array(max + 1);
  prime[0] = prime[1] = false; //0과 1은 소수가 아님
  for (let i = 2; i <= max; i++) {
    if (prime[i] === undefined) {
      prime[i] = true; // i는 소수
      for (let k = 2; i * k <= max; k++) {
        prime[i * k] = false; // i의 배수이므로 소수가 아님
      }
    }
  }
  // 소수인 것들 출력
  let answer = '';
  for (let n of reversed) {
    if (prime[n]) answer += n + ' ';
  }
  return answer;
}

/* 답안 */
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

// 입력예제
console.log(solution(9, [32, 55, 62, 20, 250, 370, 200, 30, 100]));
