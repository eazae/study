/* [문자열 탐색] 2번: 유효한 팰린드롬 */
function solution(str) {
  58;
  13;
  let K = Math.floor(str.length / 2);

  let l, r;
  //! toLowerCase()는 원본data를 바꾸지 않는다
  str = str.toLowerCase();

  for (let i = 0; i < K; i++) {
    l = str[i].charCodeAt();
    r = str[K - i + 1].charCodeAt();
    // 같지 않을 때, 둘 중 하나라도 알파벳(소문자)이면 false
    if (l !== r && ((l >= 65 && l <= 90) || (r >= 65 && r <= 90))) return 'NO';
  }
  return 'YES';
}

// 입력예제
console.log(solution('found7, time: stuPy; Yduts; emit, 7Dnuof'));
console.log(solution('found7, time: study; Yduts; emit, 7Dnuof'));
