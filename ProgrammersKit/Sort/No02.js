/* [Sort] 2번: 가장 큰 수 */
function solution(numbers) {
  // point: js는 default로 문자열 기준의 정렬을 한다. (정수도 마찬가지)
  // step 1. 정수 배열을 문자 배열로 변환
  // step 2. '+'연산자를 사용해 append 후 (js의 특징!) 비교정렬
  // step 3. join() 함수를 이용해 배열을 문자열로 합치기
  let answer = numbers
    .map((c) => c + '')
    .sort((a, b) => b + a - (a + b))
    .join('');

  //! 예외 case: numbers 배열이 0으로만 이루어져 있을 경우
  //! 오류: 0 -> '0' 으로 해야함.
  answer = answer[0] === '0' ? 0 : answer;
  // console.log(answer);
  return answer;
}

solution([6, 10, 2]);
solution([3, 30, 34, 5, 9]);
