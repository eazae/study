/* [Hash] 4번: 포켓몬 */
function solution(nums) {
  //// const map = new Map();
  //// for (let n of nums)  map.set(n, 1);

  /* Set 자료구조 활용(better) */
  const set = new Set(nums);

  return Math.min(Math.floor(nums.length / 2), set.size)
}

console.log(solution([3, 1, 2, 3]))