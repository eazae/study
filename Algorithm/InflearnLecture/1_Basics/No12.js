/* [기본문제] 12번: 대문자로 통일 */
function solution(s) {
  return s.toUpperCase();
}

/* 답안 */
//? ASCII 코드 활용
// function solution(s){
//   let answer="";
//   for(let x of s){
//       let num=x.charCodeAt();
//       if(num>=97 && num<=122) answer+=String.fromCharCode(num-32);
//       else answer+=x;

//       //if(x===x.toLowerCase()) answer+=x.toUpperCase();
//       //else answer+=x;
//   }

//   return answer;
// }

// 입력예제
console.log(solution('ItisTimeToStudy'));
