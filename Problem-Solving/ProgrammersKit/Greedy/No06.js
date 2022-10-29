/* [Greedy] 6번: 단속카메라 */
function solution(routes) {
  let answer = 1;
  //// routes.sort((a, b) => a[1] - a[0] - b[1] + b[0])
  routes.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
  });

  let camera = { start: routes[0][0], end: routes[0][1] }
  for (let r of routes) {
    if (r[0] <= camera.end) {
      camera.start = r[0];
      if (r[1] < camera.end) {
        camera.end = r[1];
      }
    } else {
      answer++;
      camera = { start: r[0], end: r[1] };
    }
    // console.log(camera, answer)
  }

  return answer;
}

console.log(solution([[-20, -15], [-14, -5], [-18, -13], [-5, -3]]))
console.log(solution([[0, 1], [2, 3], [-5, 5], [6, 7], [2, 4]]))