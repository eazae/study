/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 8번: 중복순열 구하기 */
function solution(N, M) {
  let answer = [];

  function permutation(cnt, selected) {
    if (cnt === M) {
      answer.push(selected.join(' '));
      return;
    }
    for (let i = 1; i <= N; i++) {
      // selected 배열을 인자로 넘겨주는 대신에, 예시답안에서처럼 전역으로 처리 가능
      selected.push(i);
      permutation(cnt + 1, selected);
      selected.pop();
    }
  }
  permutation(0, []);
  return answer.join('\n') + '\n' + answer.length;
}

/* 답안 */
// function solution(n, m) {
//   let answer = [];
//   let tmp = Array.from({ length: m }, () => 0);
//   function DFS(L) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = 1; i <= n; i++) {
//         tmp[L] = i;
//         DFS(L + 1);
//       }
//     }
//   }

//   DFS(0);
//   return answer;
// }

// 입력예제
console.log(solution(3, 2));
