function solution(numstrs, words) {
  var answer = [];

  let rules = new Map();
  rules.set('0', ['O', '()']);
  rules.set('1', ['I']);
  rules.set('2', ['Z', 'S', '7_']);
  rules.set('3', ['E', 'B']);
  rules.set('4', ['A']);
  rules.set('5', ['Z', 'S']);
  rules.set('6', ['b', 'G']);
  rules.set('7', ['T', 'Y']);
  rules.set('8', ['B', 'E3']);
  rules.set('9', ['g', 'q']);

  for (let w of words) {
    let match = 0;
    let check = new Map();

    for (let c of w) {
      if (!check.get(c)) {
        check.set(c, rules.get(c));
      }
    }
    console.log(check);

    //  위에서 한 문자씩 고름
    while (false) {
      let convert = new Map();
    }

    // numstrs에 있는 숫자들은 모두 rule대로
    for (let str of numstrs) {
      str = str.replace();
    }

    answer.push(match);
  }
  return answer;
}

console.log(solution(['ZASSETE', 'S4Z537B', '7_ASZEYB'], ['2455373', '425', '373', '378']));
