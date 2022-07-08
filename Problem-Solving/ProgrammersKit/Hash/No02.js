/* [Hash] 2번: 위장 */
function solution(clothes) {

    const map = new Map();
    clothes.forEach(element => {
        if(!map.get(element[1])) map.set(element[1], 1);
        else map.set(element[1], map.get(element[1])+1);
    });

    // 위장 조합의 개수: 각 종류별 옷의 개수 + 1(선택X)를 다 곱한 뒤, 마지막에 -1 (한 가지 이상은 입어야 하므로)
    let answer = 1;
    map.forEach(element => {
        answer *= element + 1;
    })
    answer -= 1;

    return answer;
}