/* [Greedy] 4번: 구명보트 */
function solution(people, limit) {
  let answer = 1;
  const N = people.length;

  people.sort((a, b) => b - a);

  let cnt = 1;
  let p1 = 1, p2 = N - 1;
  let currBoat = people[p1];
  while (cnt < N) {
    cnt++;
    if (currBoat + people[p2] <= limit) {
      currBoat += people[p2];
      p2--;
    } else {
      answer++;
      currBoat = people[p1];
      p1++;
    }
  }

  return answer;
}

console.log(solution([70, 50, 80, 50], 100))
console.log(solution([70, 80, 50], 100))