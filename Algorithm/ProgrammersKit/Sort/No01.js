/* [Sort] 1번: K번째 수 */
function solution(array, commands) {
  var answer = [];

  commands.forEach(e => {
    //! slice(i, j); 에서 i부터 j*이전*까지 자르기 때문에, +1 필요
    let sliced = array.slice(e[0]-1, e[1]);
    sliced.sort((a, b) => a-b);
    answer.push(sliced[e[2]-1]);
  });

  // console.log(answer);
  return answer;
}

solution([1, 5, 2, 6, 3, 7, 4], [[2, 5, 3], [4, 4, 1], [1, 7, 3]]);