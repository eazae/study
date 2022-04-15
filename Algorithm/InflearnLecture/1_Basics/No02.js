/* [기본문제] 1번: 삼각형 판별하기 */
// Comment: 굳이 최댓값이 어느 것인지 알 필요가 없기 때문에, 두 번째 풀이가 더 낫다.
function solution(a, b, c) {
  // 최댓값 계산
  let max = a;
  if (max < b) max = b;
  if (max < c) max = c;

  // 가장 긴 값이 나머지 둘의 합보다 작아야 함
  let check = -max;

  if (max === a) check += b + c;
  else if (max === b) check += a + c;
  else check += b + c;

  return check > 0 ? 'YES' : 'NO';
}

/* 답안 */
// function solution(a, b, c){
//   let answer="YES", max;
//   let tot=a+b+c;
//   if(a>b) max=a;
//   else max=b;
//   if(c>max) max=c;
//   if(tot-max<=max) answer="NO";
//   return answer;
// }

// 입력예제
console.log(solution(6, 7, 11));
console.log(solution(13, 33, 17));
