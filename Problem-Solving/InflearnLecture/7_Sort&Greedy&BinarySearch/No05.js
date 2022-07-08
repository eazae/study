/* [정렬, 그리디, 결정알고리즘] 5번: Least Recently Used (카카오 캐시 문제 변형) */
function solution(S, N, arr) {
  let cache = new Array(S).fill(0);

  let isHit;
  for (let t of arr) {
    isHit = false;
    // 'cache hit' 검사
    for (let i = 0; i < S; i++) {
      if (cache[i] === t) {
        // cache hit
        isHit = true;
        for (let j = i - 1; j >= 0; j--) {
          cache[j + 1] = cache[j];
        }
        cache[0] = t;
      }
    }
    if (!isHit)
      // 'cache miss' 경우
      for (let j = S - 2; j >= 0; j--) {
        cache[j + 1] = cache[j];
      }
    cache[0] = t;
  }

  return cache;
}

/* 답안 */
//? 'pos'로 2가지 경우 구분
// function solution(size, arr) {
//   let answer = Array.from({ length: size }, () => 0);
//   arr.forEach((x) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       for (let i = size - 1; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     } else {
//       for (let i = pos; i >= 1; i--) {
//         answer[i] = answer[i - 1];
//       }
//     }
//     answer[0] = x;
//   });

//   return answer;
// }
//? JS Array API 사용
// function solution(size, arr) {
//   let answer = [];
//   arr.forEach((x) => {
//     let pos = -1;
//     for (let i = 0; i < size; i++) if (x === answer[i]) pos = i;
//     if (pos === -1) {
//       answer.unshift(x);
//       if (answer.length > size) answer.pop();
//     } else {
//       answer.splice(pos, 1);
//       answer.unshift(x);
//     }
//   });

//   return answer;
// }

// 입력예제
console.log(solution(5, 9, [1, 2, 3, 2, 6, 2, 3, 5, 7]));
