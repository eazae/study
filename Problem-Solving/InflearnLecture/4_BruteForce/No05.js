/* [완전탐색] 5번: K번째 큰 수 */
function solution(N, K, arr) {
  let result = new Map();
  combination(0, 0, [], 0);

  function combination(start, cnt, picked, sum) {
    if (cnt === 3 || start >= N) {
      result.set(sum, 0);
      return;
    }

    // picked
    picked.push(arr[start]);
    combination(start + 1, cnt + 1, picked, sum + arr[start]);
    picked.pop();
    // un picked
    combination(start + 1, cnt, picked, sum);
  }
  const sorted = Array.from(result.keys());
  sorted.sort((a, b) => b - a);
  // console.log(sorted);

  return sorted[K - 1];
}

/* 답안 */
//? Set 자료구조
//? 조합
// function solution(n, k, card) {
//   let answer;
//   // Set instance(객체) 생성
//   let tmp = new Set();
//   //* 조합
//   // 사실 엄밀히 따지면 아래 3개의 for문에서 n-2, n-1, n으로 해야하지만, 이렇게 해도 상관 없다 (어차피 i+1, j+1에서 걸려서 안들어가짐)
//   // 이 방식이 더 짜기 간편해서 선호 (@강사)
//   for (let i = 0; i < n; i++) {
//     for (let j = i + 1; j < n; j++) {
//       for (let k = j + 1; k < n; k++) {
//         // add(): Set에 원소를 추가
//         tmp.add(card[i] + card[j] + card[k]);
//       }
//     }
//   }
//   // 배열로 만든 뒤 정렬
//   let a = Array.from(tmp).sort((a, b) => b - a);
//   answer = a[k - 1];
//   return answer;
// }

// 입력예제
console.log(solution(10, 3, [13, 15, 34, 23, 45, 65, 33, 11, 26, 42]));
