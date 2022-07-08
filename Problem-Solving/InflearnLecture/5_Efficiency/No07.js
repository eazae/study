/* [효율성 (투포인터 알고리즘, 슬라이딩 윈도우, 해쉬)] 7번: 아나그램 */
function solution(str1, str2) {
  let map = new Map();
  for (let c of str1) {
    if (map.has(c)) map.set(c, map.get(c) + 1);
    else map.set(c, 1);
  }
  let cnt;
  for (let c of str2) {
    cnt = map.get(c);
    if (cnt > 0) map.set(c, map.get(c) - 1);
    else return 'NO';
  }
  Array(map.values()).map((e) => {
    if (e !== 0) return 'NO';
  });
  return 'YES';
}

/* 답안 */
// function solution(str1, str2) {
//   let answer = 'YES';
//   let sH = new Map();
//   for (let x of str1) {
//     if (sH.has(x)) sH.set(x, sH.get(x) + 1);
//     else sH.set(x, 1);
//   }
//   for (let x of str2) {
//     if (!sH.has(x) || sH.get(x) == 0) return 'NO';
//     sH.set(x, sH.get(x) - 1);
//   }
//   return answer;
// }

// 입력예제
console.log(solution('AbaAeCe', 'baeeACA'));
console.log(solution('abaCC', 'Caaab'));
