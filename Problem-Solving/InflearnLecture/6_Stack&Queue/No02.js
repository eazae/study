/* [자료구조 (스택, 큐)] 2번: 괄호문자제거 */
function solution(S) {
  let answer = '';

  // indicates whether or not to push to answer,
  // eq. to bracket count
  let level = 0;
  for (let c of S) {
    if (c === '(') level++;
    else if (c === ')') level--;
    else if (level === 0) answer += c;
  }
  return answer;
}

/* 답안 */

// 입력예제
console.log(solution('(A(BC)D)EF(G(H)(IJ)K)LM(N)'));
