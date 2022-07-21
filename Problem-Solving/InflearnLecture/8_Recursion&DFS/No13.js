/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 13번: 수열 추측하기 */
function solution(N, F) {
  //* 수열
  let answer;

  const isSelected = new Array(N).fill(false);
  const seq = [];
  let tmp;

  function sequence(cnt) {
    if (cnt === N) {
      //? JS에서 deep copy를 하는 법 (array -- reference type)
      tmp = [...seq];
      console.log(seq);
      for (let i = N - 1; i > 0; i--) {
        //! 'seq' 배열로 계산하지 말고, 'tmp' 배열을 건들여야 함 ('seq' 배열은 전역에 공유되고 있으므로)
        for (let n = 0; n < i; n++) tmp[n] += tmp[n + 1];
        tmp[i] = 0;
      }
      if (tmp[0] === F) answer = seq.join(' ');
    } else
      for (let i = 0; i < N; i++) {
        if (!isSelected[i]) {
          seq[cnt] = i + 1;
          isSelected[i] = true;
          sequence(cnt + 1);
          if (answer != undefined) return;
          else isSelected[i] = false;
        }
      }
  }

  sequence(0);
  return answer;
}

/* 답안 */
// function solution(n, f) {
//   let answer,
//     flag = 0;
//   let dy = Array.from(Array(11), () => Array(11).fill(0));
//   let ch = Array.from({ length: n + 1 }, () => 0);
//   let p = Array.from({ length: n }, () => 0);
//   let b = Array.from({ length: n }, () => 0);
//   function combi(n, r) {
//     if (dy[n][r] > 0) return dy[n][r];
//     if (n === r || r === 0) return 1;
//     else return (dy[n][r] = combi(n - 1, r - 1) + combi(n - 1, r));
//   }
//   function DFS(L, sum) {
//     if (flag) return;
//     if (L === n && sum === f) {
//       answer = p.slice();
//       flag = 1;
//     } else {
//       for (let i = 1; i <= n; i++) {
//         if (ch[i] === 0) {
//           ch[i] = 1;
//           p[L] = i;
//           DFS(L + 1, sum + b[L] * p[L]);
//           ch[i] = 0;
//         }
//       }
//     }
//   }
//   for (let i = 0; i < n; i++) {
//     b[i] = combi(n - 1, i);
//   }
//   DFS(0, 0);
//   return answer;
// }

// 입력예제
console.log(solution(4, 16));
