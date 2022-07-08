/* [Hash] 3번: 위장 */
function solution(genres, plays) {
  var genresCount = {};

  // 장르별로 재생횟수를 누적
  genres.forEach((e, i) => {
    genresCount[e] = genresCount[e] ? genresCount[e] + plays[i] : plays[i];
  });

  let dupDic = {};

  return genres
    .map((e, i) => ({
      genre: e,
      count: plays[i],
      index: i,
    }))
    .sort((a, b) => {
      if (a.genre !== b.genre) return genresCount[b.genre] - genresCount[a.genre];
      if (a.count !== b.count) return b.count - a.count;
      return a.index - b.index;
    })
    .filter((t) => {
      if (dupDic[t.genre] >= 2) return false;
      dupDic[t.genre] = dupDic[t.genre] ? dupDic[t.genre] + 1 : 1;
      return true;
    })
    .map((t) => t.index);

  // let map = new Map();
  // // 모든 장르는 재생 횟수가 다르다 -> 키로 활용하면 되겠다
  // plays.forEach((e, i) => {
  //   if (map.get(genres[i])) map.set(genres[i], map.get(genres[i] + e));
  //   else map.set(genres[i], e);
  // });

  // // 정렬 조건:
  // plays.sort((a, b)=> )

  // // sort (내림차순 정렬)
  // // key로 정렬
  // map = new Map([...map.entries()].sort());
  // console.log(map);
  // // value로 정렬
  // byCat = new Map([...byCat].sort((a, b) => b - a));

  // return answer;
}
