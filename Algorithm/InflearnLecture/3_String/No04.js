/* [문자열 탐색] 4번: 가장 짧은 문자거리 */
function solution(s, t) {
  let answer = [];
  // t문자의 s에서의 위치들을 초기에 다 구해놓는다
  let position = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === t) {
      position.push(i);
    }
  }
  // 초기
  for (let i = position[0]; i >= 0; i--) {
    answer[i] = position[0] - i;
  }

  // 중간
  let start = position[1],
    end; // 0-1-2-..-2-1-0 이런식으로
  let span;
  for (let i = 0; i < position.length - 1; i++) {
    start = position[i];
    end = position[i + 1];
    span = end - start;
    for (let j = 0; j < span / 2; j++) {
      answer[start + j] = j;
      answer[end - j] = j;
    }
    // 홀수 일 경우
    if (span % 2 === 0) answer[start + Math.ceil(span / 2)] = Math.ceil(span / 2);
  }

  // 끝
  for (let i = 1; i <= s.length - end; i++) {
    answer.push(i);
  }
  return answer;
}

/* 답안 */
// O(n): for문을 -> <- 이렇게 2번만 돌면 됨
function solution(s, t) {
  let answer = [];
  let p = 1000;
  for (let x of s) {
    if (x === t) {
      p = 0;
      answer.push(p);
    } else {
      p++;
      answer.push(p);
    }
  }
  p = 1000;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] === t) p = 0;
    else {
      p++;
      answer[i] = Math.min(answer[i], p);
    }
  }
  return answer;
}

// 입력예제
console.log(solution('teachermode', 'e'));
