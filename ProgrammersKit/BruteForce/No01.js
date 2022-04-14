/* [Brute Force] 1번: 모의고사 */
function solution(answers) {

  const one = [1, 2, 3, 4, 5];
  const two = [2, 1, 2, 3, 2, 4, 2, 5];
  const three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  // 각 수포자가 맞춘 정답의 개수
  let answer = [0, 0, 0];

  // mod 연산자를 이용하자
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === one[i % 5]) answer[0]++;
    if (answers[i] === two[i % 8]) answer[1]++;
    if (answers[i] === three[i % 10]) answer[2]++;
  }

  console.log(answer);
  let sorted = answer;

  sorted.sort((a, b) => b - a);
  console.log(sorted);

  const max = Math.max(...answer);
  // console.log(max)
  // console.log(sorted[0])
  let list = [];
  if (max === answer[0]) list.push(1);
  if (max === answer[1]) list.push(2);
  if (max === answer[2]) list.push(3);


  // 세 명 모두 정답이 0인 경우 제외
  let list2 = []
  // if (sorted[0] > 0) {
  if (sorted[0] === answer[0]) list2.push(1);
  if (sorted[0] === answer[1]) list2.push(2);
  if (sorted[0] === answer[2]) list2.push(3);
  // }


  console.log(list)
  console.log(list2)

  return list;
}

// solution([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]);
// solution([1, 3, 2, 4, 2, 1, 3, 2, 4, 2, 1]);
solution([3, 3, 1, 1, 1, 1, 2, 3, 4, 5])
