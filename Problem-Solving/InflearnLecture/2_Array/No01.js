/* [1,2차원 배열 탐색] 1번: 큰 수 출력하기 */
function solution(N, arr) {
  let answer = [arr[0]];
  for (let i = 1; i < N; i++) {
    if (arr[i] > arr[i - 1]) answer.push(arr[i]);
  }
  return answer;
}

// 입력예제
console.log(solution(6, [7, 3, 9, 5, 6, 12]));
