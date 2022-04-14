/* [Stack/Queue] 2번: 프린터 */
function solution(priorities, location) {
  var answer = 0;

  // pointer를 사용해서 대기목록에서의 인덱스를 저장하고 있도록 하자
  let pointer = location;

  //? js에서 boolean 배열을 생성 및 초기화 할 수 있는 방법
  //// let printed = new Array(priorities.length).fill(false);


  // attempt1. 다 해보자
  while(priorities.length > 0) {
    // 맨 앞의 것이 출력되었는지 여부 flag
    let printed = true;
    let target = priorities.shift();
    // answer++;

    for(let e of priorities) {
      // 하나라도 중요도가 높은 것이 있으면,
      if(e > target) {
        // 대기목록의 가장 마지막에 넣는다
        priorities.push(target);

        if(pointer === 0) pointer = priorities.length;
        printed = false;
        break;
      }
    }
    if(printed) answer++;
    // else 
    pointer--;
    
    // 출력하고자 했던 것이 출력됨
    if(pointer === 0) return answer;
  }

  // return answer;
}