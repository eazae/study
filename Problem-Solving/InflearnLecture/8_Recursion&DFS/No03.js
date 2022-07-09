/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 3번: 이진트리 순회 (깊이우선탐색) */
function solution(N) {
  // 내 방식 재귀
  //! 공백문자를 재귀식의 어디에 배치해야되는지에 대해서 고민하는 과정이 있었음
  // (-> 그냥 출력하는 n의 뒤에 이어붙여놓으면 됨. 단순한데 착각함)
  //* 전위 순회
  function VLR(n) {
    if (n > 7) return '';
    return n + ' ' + VLR(n * 2) + VLR(n * 2 + 1); // V -> L -> R
  }

  //* 중위 순회
  function LVR(n) {
    if (n > 7) return '';
    return LVR(n * 2) + n + ' ' + LVR(n * 2 + 1); // V -> L -> R
  }

  //* 후위 순회
  function LRV(n) {
    if (n > 7) return '';
    return LRV(n * 2) + LRV(n * 2 + 1) + n + ' '; // V -> L -> R
  }

  console.log(VLR(N));
  console.log(LVR(N));
  console.log(LRV(N));

  // //* 전위순회
  // let vlr_answer = '';
  // function VLR(n) {
  //   if (n > 7) return;
  //   vlr_answer += n + ' '; // V
  //   VLR(n * 2); // L
  //   VLR(n * 2 + 1); // R
  // }

  // //* 중위순회
  // let lvr_answer = '';
  // function LVR(n) {
  //   if (n > 7) return;
  //   LVR(n * 2); // L
  //   lvr_answer += n + ' '; // V
  //   LVR(n * 2 + 1); // R
  // }

  // //* 후위순회
  // let lrv_answer = '';
  // function LRV(n) {
  //   if (n > 7) return;
  //   LRV(n * 2); // L
  //   LRV(n * 2 + 1); // R
  //   lrv_answer += n + ' '; // V
  // }

  // 출력
  // VLR(N);
  // LVR(N);
  // LRV(N);
  // console.log(vlr_answer);
  // console.log(lvr_answer);
  // console.log(lrv_answer);
}

/* 답안 */
// function solution(n) {
//   let answer = '';
//   function DFS(v) {
//     if (v > 7) return;
//     else {
//       answer += v + ' ';
//       DFS(v * 2);
//       DFS(v * 2 + 1);
//     }
//   }
//   DFS(n);
//   return answer;
// }

// 입력예제
solution(1);
