/* [완전탐색] 4번: 졸업 선물 */
//! ERROR: sort 부분
function solution(N, M, arr) {
  //! (X) sort: 마지막 할인쿠폰이 적용된 가격 기준으로
  arr.sort((a, b) => a[0] / 2 + a[1] - (b[0] / 2 + b[1]));
  // console.log(arr);

  // affordable list
  // (최소 1개 이상의 상품을 살 수 있음)
  let cnt = 0;
  let total = 0;

  for (let e of arr) {
    if (total + e[0] + e[1] <= M) {
      cnt++;
      total += e[0] + e[1];
    } else if (total + e[0] / 2 + e[1] <= M) {
      // 50% coupon
      cnt++;
      // total += arr[0] / 2 + arr[1];
      break;
    } else {
      break;
    }
  }
  return cnt;
}

/* 답안 */
// function solution(k, m, product) {
//   let answer = 0;
//   let n = product.length;
//   product.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
//   for (let i = 0; i < n; i++) {
//     let money = m - (product[i][0] / 2 + product[i][1]);
//     let cnt = 1;
//     for (let j = 0; j < n; j++) {
//       if (j !== i && product[j][0] + product[j][1] > money) break;
//       if (j !== i && product[j][0] + product[j][1] <= money) {
//         money -= product[j][0] + product[j][1];
//         cnt++;
//       }
//     }
//     answer = Math.max(answer, cnt);
//   }
//   return answer;
// }

// 입력예제
console.log(
  solution(5, 28, [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ])
); // 4

console.log(
  solution(5, 41, [
    [8, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [12, 1],
  ])
); // 5
