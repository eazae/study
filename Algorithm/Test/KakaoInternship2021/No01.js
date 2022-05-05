/* 1번: 숫자 문자열과 영단어 */
function solution(s) {
  var answer = '';

  let len = s.length;
  let c;

  for (let i = 0; i < len; i++) {
    c = s[i];
    //! here c < '9'
    if (c >= '0' && c <= '9') answer += c;
    else {
      switch (c) {
        case 'z':
          answer += '0';
          i += 3;
          break;
        case 'o':
          answer += '1';
          i += 2;
          break;
        case 't':
          if (s[i + 1] === 'w') {
            answer += '2';
            i += 2;
          } else {
            answer += '3';
            i += 4;
          }
          break;
        case 'f':
          if (s[i + 1] === 'o') {
            answer += '4';
            i += 3;
          } else {
            answer += '5';
            i += 3;
          }
          break;
        case 's':
          if (s[i + 1] === 'i') {
            answer += '6';
            i += 2;
          } else {
            answer += '7';
            i += 4;
          }
          break;
        case 'e':
          answer += '8';
          i += 4;
          break;
        case 'n':
          answer += '9';
          i += 3;
          break;
      }
    }
  }

  //! HERE Number()로 변형 필요
  return Number(answer);
}

console.log(solution('one4seveneight'));
