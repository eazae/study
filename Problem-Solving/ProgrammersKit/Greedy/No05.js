/* [Greedy] 5번: 섬 연결하기 */
function solution(n, costs) {
  let answer = 0;
  costs.sort((a, b) => a[2] - b[2]);

  /* union find -> 더 작은 섬id값을 가진 것이 부모가 됨 */
  const group = new Array(n);
  for (let i = 0; i < n; i++) group[i] = i;

  for (let c of costs) {
    if (group.reduce((a, b) => a + b, 0) === 0) return answer;
    if (union(c[0], c[1])) {
      answer += c[2];
    }
  }

  // b 그룹을 a 그룹으로 union
  function union(a, b) {
    let aRoot = find(a);
    let bRoot = find(b);
    if (aRoot !== bRoot) {
      if (aRoot < bRoot) group[bRoot] = aRoot;
      else group[aRoot] = bRoot;
      return true;
    } else {
      return false;
    }
  }

  function find(a) {
    //! ERROR return 누락
    // if (group[a] !== a) find(group[a]);
    if (group[a] !== a) return find(group[a]);
    else return a;
  }

  return answer;
}

console.log(solution(4, [[0, 1, 1], [0, 2, 2], [1, 2, 5], [1, 3, 1], [2, 3, 8]]))