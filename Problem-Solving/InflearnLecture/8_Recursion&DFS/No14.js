/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 14번: 조합 구하기 */
//? 조합
function solution(N, M) {
  let answer = [];

  //! start 인자 필요
  function combination(start, cnt, set) {
    if (cnt === M) answer.push(set.join(' '));
    // 생략가능
    //// else if (n >= N) return;
    else
      for (let i = start; i < N; i++) {
        set[cnt] = i + 1;
        //! ERROR 'start' param으로 n+1이 아닌 i+1
        combination(i + 1, cnt + 1, set);
        //// combination(n + 1, cnt, set);
      }
  }
  combination(0, 0, []);
  return answer.join('\n') + '\n' + answer.length;
}

/* 답안 */
// function solution(n, m) {
//   let answer = [];
//   let tmp = Array.from({ length: m }, () => 0);
//   function DFS(L, s) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = s; i <= n; i++) {
//         tmp[L] = i;
//         DFS(L + 1, i + 1);
//       }
//     }
//   }
//   DFS(0, 1);
//   return answer;
// }

// 입력예제
console.log(solution(4, 2));
