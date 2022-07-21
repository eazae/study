/* [재귀함수와 완전탐색(DFS, 깊이우선탐색)] 12번: 조합의 경우수 (메모이제이션) */
//? Memoization
function solution(N, R) {
  //* memoization
  //! 배열로 변경
  //// let memo = new Map();
  //? 0으로 초기화 된 2차배열 선언 방법
  let memo = Array.from(Array(R), () => Array(N).fill(0));

  function reqursive(n, r) {
    if (r === n) return 1;
    if (r === 1) return n;

    if (memo[r - 1][n - 1] === 0)
      memo[r - 1][n - 1] = reqursive(n - 1, r) + reqursive(n - 1, r - 1);
    return memo[r - 1][n - 1];

    //// if (memo.has({ n, r })) return memo.get({ n, r });
    //// memo.set({ n, r }, reqursive(n - 1, r) + reqursive(n - 1, r - 1));
  }
  return reqursive(N, R);
  //// return memo.get({ n: N, r: R });
}

/* 답안 */

// 입력예제
console.log(solution(5, 3));
console.log(solution(33, 19));
