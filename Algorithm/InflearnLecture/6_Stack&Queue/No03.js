/* [자료구조 (스택, 큐)] 3번: 크레인 인형뽑기 (카카오) */
function solution(board, moves) {
  let answer = 0;

  let N = board.length;
  // 인형을 뽑을 위치 (높이)
  let pointer = new Array(N).fill(-1);

  for (let r = 0; r < N; r++) {
    for (let c = 0; c < N; c++) {
      if (board[r][c] !== 0 && pointer[c] === -1) pointer[c] = r;
    }
  }

  // 뽑은 인형들의 stack
  let basket = [];

  let pick;
  for (let x of moves) {
    if (pointer[x - 1] < N) {
      pick = board[pointer[x - 1]][x - 1];
      board[pointer[x - 1]][x - 1] = 0;
      pointer[x - 1] = pointer[x - 1] + 1;
      // pointer[x-1]++;  // (동일)

      // 바구니에 넣음
      if (basket[basket.length - 1] === pick) {
        basket.pop();
        answer += 2;
      } else {
        basket.push(pick);
      }
    }
  }
  return answer;
}

/* 답안 */

// 입력예제
console.log(
  solution(
    [
      [0, 0, 0, 0, 0],
      [0, 0, 1, 0, 3],
      [0, 2, 5, 0, 1],
      [4, 2, 4, 4, 2],
      [3, 5, 1, 3, 1],
    ],
    [1, 5, 3, 5, 1, 2, 1, 4]
  )
);
