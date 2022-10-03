/* [Brute Force] 6번: 모음사전 */
function solution(word) {
  let answer = 0;
  // 점화식
  const relation = [];
  relation[4] = 1;
  for (let i = 3; i >= 0; i--) {
    relation[i] = relation[i + 1] * 5 + 1;
  }

  for (let i = 0; i < word.length; i++) {
    switch (word[i]) {
      case 'A':
        answer += 0 * relation[i];
        break;
      case 'E':
        answer += 1 * relation[i];
        break;
      case 'I':
        answer += 2 * relation[i];
        break;
      case 'O':
        answer += 3 * relation[i];
        break;
      case 'U':
        answer += 4 * relation[i];
        break;
    }
    answer++;
  }

  return answer;
}

console.log(solution('UUUUU'));
console.log(solution('AAAAA'));
console.log(solution('AAAAE'));
console.log(solution('AAAE'));
console.log(solution('I'));
console.log(solution('EIO'));
