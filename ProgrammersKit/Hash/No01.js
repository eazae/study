/* [Hash] 1번: 완주하지 못한 선수 */
function solution(participant, completion) {
    const map = new Map();

    for(const p of participant) {
        // 동명이인에 대한 처리
        if(!map.get(p)) {
            map.set(p, 1);
        } else {
            map.set(p, map.get(p) + 1);
        }
    }

    for(const c of completion) {
        if(map.get(c)) {
            map.set(c, map.get(c) - 1);
        }
    }

    for(let [key, value] of map) {
        if(value > 0) return key;
    }
    return '';
}