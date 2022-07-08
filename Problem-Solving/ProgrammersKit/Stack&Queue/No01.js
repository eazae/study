/* [Stack/Queue] 1번: 기능개발 */
function solution(progresses, speeds) {
  var answer = [];

  // var due = [];
  // progresses.forEach((e, i) => {
  //   due.push(Math.ceil((100 - e) / speeds[i]));
  // });

  //* 바로 이렇게 하나로 축약해도 되겠다. 
  // (이때 주의: map() => {} (X) -> map() => () (O))
  const due = progresses.map((e, i) => (
    Math.ceil((100 - e) / speeds[i])
  ));
  // console.log(due); (확인용)

  // 가장 앞의 개발완료기간. 뒤의 기능이 이보다 짧게 걸린다면 대기해야 한다. 
  //! 여기에서 예외가 발생했다는 것을 깨달음. (line22)
  let temp = due[0];
  let cnt = 1;
  for (let i=1; i<due.length; i++) {
    //! <가 아닌, <= 이어야 함
    if(temp >= due[i]) cnt++;
    else {
      // 정답배열에 이전까지의 배포 cnt를 담자
      answer.push(cnt);
      // 초기화
      cnt = 1;
      temp = due[i];
    }
  }
  // 마지막 것 push한 뒤 마무리
  answer.push(cnt);

  return answer;
}

solution([93, 30, 55], [1, 30, 5]);