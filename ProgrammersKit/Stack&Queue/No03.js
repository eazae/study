/* [Stack/Queue] 3번: 다리를 지나는 트럭 */
function solution(bridge_length, weight, truck_weights) {
  var answer = 0;

  // 현재 다리에 올라가 있는 총 무게
  let total = 0;

  let crossed = 0;
  const cnt = truck_weights.length;

  let bridge = new Array(bridge_length).fill(0);

  while(crossed < cnt) {
    answer++;

    // 다리 끝의 것을 shift
    let out = bridge.shift();
    // 하나의 트럭이 나온 경우, crossed 증가
    if(out !== 0) crossed++; 
    // 다리의 현재 하중 갱신
    total -= out;

    // 최대 하중을 넘기지 않는 경우
    if(total + truck_weights[0] <= weight) {
      // 대기 트럭 중 첫번째 것을 들여보냄
      let enter = truck_weights.shift();
      bridge.push(enter);
      total += enter;
    } else {
      //! 여기에서 오류: shift() 이후로 배열길이 자체가 줄어듦으로, 0을 따로 넣어줘야 함
      bridge.push(0);
    }
    // console.log(bridge, total);
  }

  // console.log(answer);
  return answer;
}

solution(2, 10, [7,4,5,6]);