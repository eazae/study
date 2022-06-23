/* [자료구조 (스택, 큐)] 7번: 교육과정 설계 */
function solution(requisites, plan) {
  // 필수과목을 수강하게 되는 위치
  let sequence = new Array(requisites.length);

  for (let i = 0; i < plan.length; i++) {
    for (let j = 0; j < requisites.length; j++) {
      if (plan[i] === requisites[j]) {
        sequence[j] = i;
        break;
      }
    }
  }

  // i. sequence 배열에 있는 index번호는, 연속적으로 증가해야 함.
  // ii. 또한, 값이 없으면 안됨
  for (let j = 0; j < sequence.length; j++) {
    if (sequence[j] === undefined || (j > 0 && sequence[j - 1] > sequence[j])) return 'NO';
  }
  return 'YES';
}

/* 답안 */
// function solution(need, plan) {
//   let answer = 'YES';
//   let queue = need.split('');
//   for (let x of plan) {
//     if (queue.includes(x)) {
//       if (x !== queue.shift()) return 'NO';
//     }
//   }
//   if (queue.length > 0) return 'NO';
//   return answer;
// }

// 입력예제
console.log(solution('CBA', 'CBDAGE'));
console.log(solution('CBA', 'CGEADB'));
