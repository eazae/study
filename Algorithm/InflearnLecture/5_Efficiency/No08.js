/* [효율성 (투포인터 알고리즘, 슬라이딩 윈도우, 해쉬)] 8번: 아나그램 */
function solution(S, T) {
  let answer = 0;

  // characters that need to be included in the anagram
  let include = new Map();

  // save all the characters in T
  for (let c of T) {
    if (include.has(c)) include.set(c, include.get(c) + 1);
    else include.set(c, 1);
  }

  // init sliding window
  let start = 0,
    end = T.length - 1;
  let tmp;
  for (let i = start; i <= end; i++) {
    tmp = S[i];
    if (include.has(tmp)) include.set(tmp, include.get(tmp) - 1);
  }

  // sliding window, check if anagram
  let isAnagram;
  while (end < S.length) {
    isAnagram = true;

    for (let e of include) {
      if (e[1] !== 0) {
        isAnagram = false;
        break;
      }
    }
    // console.log(include, isAnagram);
    if (isAnagram) answer++;

    tmp = S[start++];
    if (include.has(tmp)) include.set(tmp, include.get(tmp) + 1);

    tmp = S[++end];
    if (include.has(tmp)) include.set(tmp, include.get(tmp) - 1);
  }

  return answer;
}

/* 답안 */
// function compareMaps(map1, map2) {
//   if (map1.size !== map2.size) return false;
//   for (let [key, val] of map1) {
//     if (!map2.has(key) || map2.get(key) !== val) return false;
//   }
//   return true;
// }
// function solution(s, t) {
//   let answer = 0;
//   let tH = new Map();
//   let sH = new Map();
//   for (let x of t) {
//     if (tH.has(x)) tH.set(x, tH.get(x) + 1);
//     else tH.set(x, 1);
//   }
//   let len = t.length - 1;
//   for (let i = 0; i < len; i++) {
//     if (sH.has(s[i])) sH.set(s[i], sH.get(s[i]) + 1);
//     else sH.set(s[i], 1);
//   }
//   let lt = 0;
//   for (let rt = len; rt < s.length; rt++) {
//     if (sH.has(s[rt])) sH.set(s[rt], sH.get(s[rt]) + 1);
//     else sH.set(s[rt], 1);
//     if (compareMaps(sH, tH)) answer++;
//     sH.set(s[lt], sH.get(s[lt]) - 1);
//     if (sH.get(s[lt]) === 0) sH.delete(s[lt]);
//     lt++;
//   }
//   return answer;
// }

// 입력예제
console.log(solution('bacaAacba', 'abc'));
