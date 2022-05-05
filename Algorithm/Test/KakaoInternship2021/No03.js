function solution(n, k, cmd) {
  let answer = new Array(n).fill('O');

  let focus = k;
  let deleted = [];

  // Double Linked List
  let prev = new Map();
  for (let i = 1; i < n; i++) {
    prev.set(i, i - 1);
  }
  let next = new Map();
  for (let i = 0; i < n - 1; i++) {
    next.set(i, i + 1);
  }

  // end of list: -1로 표현
  next.set(n - 1, -1);

  let idx;

  for (let c of cmd) {
    c = c.split(' '); // parse
    c[1] = Number(c[1]);
    switch (c[0]) {
      case 'U':
        for (let i = 0; i < c[1]; i++) {
          focus = prev.get(focus);
        }
        break;
      case 'D':
        for (let i = 0; i < c[1]; i++) {
          focus = next.get(focus);
        }
        break;
      case 'C':
        deleted.push(focus);
        answer[focus] = 'X';
        // update list
        next.set(prev.get(focus), next.get(focus));
        prev.set(next.get(focus), prev.get(focus));
        // update focus
        if (next.get(focus) > 0) focus = next.get(focus);
        else focus = prev.get(focus);
        break;
      case 'Z':
        idx = deleted.pop();
        answer[idx] = 'O';

        //! HERE 밑에 부분 필요 없음
        next.set(prev.get(idx), idx);
        prev.set(next.get(idx), idx);

        // // update list
        // let isLast = true;

        // for (let i = idx + 1; i < n; i++) {
        //   // 표에 남아있는 원소 찾을 떄까지 탐색, 그것으로 linked list 연결
        //   if (answer[i] === 'O') {
        //     next.set(idx, i);
        //     prev.set(i, idx);
        //     isLast = false;
        //     break;
        //   }
        // }
        // // 되돌린 것이 표의 마지막 (유효한) 원소였을 경우, -1로 끝임을 표현
        // if (isLast) {
        //   next.set(idx, -1);
        // }
        // for (let i = idx - 1; i >= 0; i--) {
        //   if (answer[i] === 'O') {
        //     prev.set(idx, i);
        //     next.set(i, idx);
        //     break;
        //   }
        // }
        break;
    }
  }
  return answer.join('');
}

console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z']));
console.log(solution(8, 2, ['D 2', 'C', 'U 3', 'C', 'D 4', 'C', 'U 2', 'Z', 'Z', 'U 1', 'C']));
