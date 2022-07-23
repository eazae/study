/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 15번: 수들의 조합 */
//? 조합
function solution(N, K, numbers, M) {
  let answer = 0;

  function combination(start, cnt, sum) {
    if (cnt === K) {
      if (sum % M === 0) answer++;
    } else
      for (let i = start; i < N; i++) {
        combination(i + 1, cnt + 1, sum + numbers[i]);
      }
  }
  combination(0, 0, 0);
  return answer;
}

/* 답안 */
// function solution(n, k, arr, m) {
//   let answer = 0;
//   function DFS(L, s, sum) {
//     if (L === k) {
//       if (sum % m === 0) answer++;
//     } else {
//       for (let i = s; i < n; i++) {
//         DFS(L + 1, i + 1, sum + arr[i]);
//       }
//     }
//   }

//   DFS(0, 0, 0);
//   return answer;
// }

// 입력예제
console.log(solution(5, 3, [2, 4, 5, 8, 12], 6));
