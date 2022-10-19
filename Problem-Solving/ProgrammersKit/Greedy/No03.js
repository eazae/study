/* [Greedy] 3번: 큰 수 만들기 */
function solution(number, k) {
  const N = number.length;
  const answer = number.split('');

  // while (k > 0) {
  //   let isOut = false;
  //   for (let i = 0; i < N - 1; i++) {
  //     if (answer[i] !== '') {
  //       for (let j = i + 1; j < N; j++) {
  //         if (answer[j] !== '') {
  //           if (answer[i] < answer[j]) {
  //             answer[i] = '';
  //             k--;
  //             isOut = true;
  //           }
  //           break;
  //         }
  //       }
  //     }
  //     if (isOut) break;
  //   }
  // }

  for (let i = 0; i < N && k > 0; i++) {
    if (answer[i] < answer[i + 1]) {
      // 그 앞의 것들 중에서 가까운 것부터 삭제
      for (let j = i; j >= 0; j--) {
        if (answer[j] !== '' && answer[j] < answer[i + 1]) {
          answer[j] = '';
          k--;
          if (k === 0) break;
        }
      }
    }
  }

  // 시도3 추가) k가 아직 0이 아닌 경우, 뒤에서부터 삭제 (남아있는 숫자는 내림차순일 것이므로)
  for (let i = N - 1; i >= 0 && k > 0; i--) {
    if (answer[i] !== '') {
      answer[i] = '';
      k--;
    }
  }

  return answer.join('');
}

console.log(solution('1924', 2));
console.log(solution('1231234', 3));
console.log(solution('4177252841', 4));
console.log(solution('4321', 1)); // 시도3
