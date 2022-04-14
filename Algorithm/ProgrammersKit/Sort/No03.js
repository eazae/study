/* [Sort] 3번: H-Index */
function solution(citations) {
  // 배열을 내림차순 정렬
  // 총 논문 개수에서 하나씩 감소하면서 h<=h 를 만족시키는 h를 찾자
  citations.sort((a, b) => b - a);
  // let answer = 0;
  // console.log(citations);

  for (let h = citations.length; h > 0; h--) {
    if (h <= citations[h - 1]) {
      // console.log(h);
      return h;
    }
  }

  // 0일 경우에 필요
  return 0;
  // return answer;
}

solution([3, 0, 6, 1, 5]);
