/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 4번: 부분집합 구하기 (DFS) */
function solution(N) {
  let answer = '';
  let elements = [];
  for (let i = 1; i <= N; i++) elements.push(i);

  function subset(isSelected, cnt) {
    // 부분집합 출력
    if (cnt === N) {
      for (let x of isSelected) answer += x + ' ';
      answer += '\n';
      return;
    }

    // cnt 인덱스에 있는 원소를 선택한 부분집합
    isSelected.push(elements[cnt]);
    subset(isSelected, cnt + 1);
    // cnt 인덱스에 있는 원소를 선택하지 않은 부분집합
    isSelected.pop();
    subset(isSelected, cnt + 1);
  }

  subset([], 0);
  //// return answer.trim();
  //? trim()을 사용해서 마지막 공백을 제거
  return answer.trim();
}

/* 답안 */
// function solution(n) {
//   let answer = [];
//   let ch = Array.from({ length: n + 1 }, () => 0);
//   function DFS(L) {
//     if (L === n + 1) {
//       let tmp = '';
//       for (let i = 1; i <= n; i++) {
//         if (ch[i] === 1) tmp += i + ' ';
//       }
//       if (tmp.length > 0) answer.push(tmp.trim());
//     } else {
//       ch[L] = 1;
//       DFS(L + 1);
//       ch[L] = 0;
//       DFS(L + 1);
//     }
//   }
//   DFS(1);
//   return answer;
// }

// 입력예제
console.log(solution(3));
