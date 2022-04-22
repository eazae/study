/* [1,2차원 배열 탐색] 2번: 보이는 학생 */
function solution(N, arr) {
  let max = 0;
  let answer = 1;
  for (let i = 1; i < N; i++) {
    if (max < arr[i]) {
      max = arr[i];
      answer++;
    }
  }
  return answer;
}

// 입력예제
console.log(solution(8, [130, 135, 148, 140, 145, 150, 150, 153]));
