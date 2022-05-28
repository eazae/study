/* [효율성 (투포인터 알고리즘, 슬라이딩 윈도우, 해쉬)] 6번: 최대 매출 */
function solution(N, votes) {
  let map = new Map();
  map.set('A', 0);
  map.set('B', 0);
  map.set('C', 0);
  map.set('D', 0);
  map.set('E', 0);

  for (let v of votes) {
    map.set(v, map.get(v) + 1);
  }
  let answer;
  let max = 0;
  for (let x of map) {
    if (x[1] > max) {
      answer = x[0];
      max = x[1];
    }
  }
  return answer;
}

/* 답안 */
// function solution(s) {
//   let answer;
//   let sH = new Map();
//   for (let x of s) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   let max = Number.MIN_SAFE_INTEGER;
//   for (let [key, val] of sH) {
//     if (val > max) {
//       max = val;
//       answer = key;
//     }
//   }
//   return answer;
// }

// 입력예제
console.log(solution(15, 'BACBACCACCBDEDE'));
