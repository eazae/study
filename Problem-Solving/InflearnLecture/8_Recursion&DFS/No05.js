/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 5번: 합이 같은 부분집합 (DFS: 아마존 인터뷰) */
function solution(N, elements) {
  //* 부분집합의 합 == 모든 원소를 더한 총합 / 2
  // 를 활용하자
  const varifySum = elements.reduce((prev, curr) => prev + curr, 0) / 2;
  let sum;

  function subset(isSelected, cnt) {
    if (cnt === N) {
      sum = isSelected.reduce((prev, curr) => prev + curr, 0);
      if (sum === varifySum) return true;
      else return false;
    }

    isSelected.push(elements[cnt]);
    if (subset(isSelected, cnt + 1)) return true;
    isSelected.pop();
    if (subset(isSelected, cnt + 1)) return true;
  }

  return subset([], 0) ? 'YES' : 'NO';
}

/* 답안 */
// function solution(N, arr) {
//   let answer = 'NO',
//     flag = 0;
//   let total = arr.reduce((a, b) => a + b, 0);
//   let n = arr.length;
//   function DFS(L, sum) {
//     if (flag) return;
//     if (L === n) {
//       if (total - sum === sum) {
//         answer = 'YES';
//         flag = 1;
//       }
//     } else {
//       DFS(L + 1, sum + arr[L]);
//       DFS(L + 1, sum);
//     }
//   }
//   DFS(0, 0);
//   return answer;
// }

// 입력예제
//? 함수 실행시간 측정법 2가지
// let start = new Date(); // 시작시간
console.log(solution(6, [1, 3, 5, 6, 7, 10])); // YES
// let end = new Date(); // 종료시간
// console.log(end - start);

// console.time('Ex2');
console.log(solution(6, [1, 3, 5, 6, 7, 11])); // NO
// console.timeEnd('Ex2');
