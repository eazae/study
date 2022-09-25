/* [Brute Force] 5번: 전력망을 둘로 나누기 */
function solution(n, wires) {
  var answer = n;

  for (let i = 0; i < n - 1; i++) {
    const isVisited = Array(n + 1).fill(false);
    const tree1 = [wires[i][0]];
    let cnt1 = 1;
    let curr1;

    while (tree1.length !== 0) {
      curr1 = tree1.pop();
      isVisited[curr1] = true;
      for (let j = 0; j < n - 1; j++) {
        if (j === i) continue;
        if (wires[j][0] === curr1 && !isVisited[wires[j][1]]) {
          tree1.push(wires[j][1]);
          cnt1++;
        } else if (wires[j][1] === curr1 && !isVisited[wires[j][0]]) {
          tree1.push(wires[j][0]);
          cnt1++;
        }
      }
    }

    //* 무조건 둘로 나뉘므로 나머지 트리는 계산할 필요가 없어진다
    answer = Math.min(answer, Math.abs(n - cnt1 - cnt1));
  }

  return answer;
}

console.log(
  solution(9, [
    [1, 3],
    [2, 3],
    [3, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [7, 8],
    [7, 9],
  ])
);
console.log(
  solution(4, [
    [1, 2],
    [2, 3],
    [3, 4],
  ])
);
console.log(
  solution(7, [
    [1, 2],
    [2, 7],
    [3, 7],
    [3, 4],
    [4, 5],
    [6, 7],
  ])
);
