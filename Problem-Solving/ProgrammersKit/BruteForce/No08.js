/* [Brute Force] 8번: 소수 찾기 */
function solution(numbers) {
  var answer = 0;

  numbers = numbers.split('');
  const N = numbers.length;

  // 소수
  const prime = [false, false];

  permutation(1, new Array(N), '');

  function permutation(cnt, isVisited, n) {
    // if (cnt === N) {
    //   if (prime[n] !== true && check(parseInt(n))) answer++;
    //   return;
    // }

    for (let i = 0; i < N; i++) {
      if (!isVisited[i]) {
        isVisited[i] = true;
        n += numbers[i];
        if (prime[n] !== true && check(parseInt(n))) answer++;
        permutation(cnt + 1, isVisited, n);
        n = n.slice(cnt, 1);
        isVisited[i] = false;
      }
    }
  }

  function check(n) {
    // memoization
    if (prime[n] !== undefined) return prime[n];
    else {
      for (let i = 2; i < n; i++) {
        if (n % i === 0) {
          prime[n] = false;
          // prime[i] = false;
          return false;
        }
      }
    }
    console.log(n);
    prime[n] = true;
    return true;
  }

  return answer;
}

// console.log(solution('17'));
console.log(solution('221'));
