/* [Brute Force] 4번: 피로도 */
function solution(k, dungeons) {
  var answer = -1;
  const L = dungeons.length;

  // 정렬 (약간의 효율성을 위하여)
  dungeons.sort((a, b) => {
    if (a[1] === b[1]) {
      return b[0] - a[0];
    } else return a[1] - b[1];
  })

  // factorial (순열)
  let isVisited = Array(k).fill(false);
  factorial(isVisited, k, 0);

  function factorial(isVisited, fatigue, cnt) {
    answer = Math.max(answer, cnt);
    for (let i = 0; i < L; i++) {
      if (!isVisited[i]) {
        if (fatigue >= dungeons[i][0] && fatigue - dungeons[i][1] >= 0) {
          isVisited[i] = true;
          factorial(isVisited, fatigue - dungeons[i][1], cnt + 1);
          isVisited[i] = false;
          // fatigue += dungeons[i][1];
        }
      }
    }
  }

  return answer;
}

console.log(solution(80, [[80, 20], [50, 40], [30, 10]]));