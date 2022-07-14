/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 10번: 순열 구하기 */
function solution(N, M, numbers) {
  let answer = [];
  let isSelected = new Array(N).fill(false);

  function permutation(selected) {
    if (selected.length === M) {
      answer.push(selected.join(' '));
      return;
    }
    for (let i = 0; i < N; i++) {
      if (!isSelected[i]) {
        isSelected[i] = true;
        selected.push(numbers[i]);
        permutation(selected);
        isSelected[i] = false;
        selected.pop();
      }
    }
  }

  permutation([]);
  return answer.join('\n') + '\n' + answer.length;
}

/* 답안 */
// function solution(m, arr) {
//   let answer = [];
//   n = arr.length;
//   let ch = Array.from({ length: n }, () => 0);
//   let tmp = Array.from({ length: m }, () => 0);
//   function DFS(L) {
//     if (L === m) {
//       answer.push(tmp.slice());
//     } else {
//       for (let i = 0; i < n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           tmp[L] = arr[i];
//           DFS(L + 1);
//           ch[i] = 0;
//         }
//       }
//     }
//   }
//   DFS(0);
//   return answer;
// }

// 입력예제
console.log(solution(3, 2, [3, 6, 9]));
