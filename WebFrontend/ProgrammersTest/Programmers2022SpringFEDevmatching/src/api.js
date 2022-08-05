export const API_END_POINT = 'https://wr4a6p937i.execute-api.ap-northeast-2.amazonaws.com/dev';

// API 캐시하기 - 키워드 별로 온 응답에 대해 캐시할 수 있음
const cache = {};

const request = async (url) => {
  // 캐시
  if (cache[url]) return cache[url];

  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    // 캐시 저장
    cache[url] = json;
    return json;
  }
  throw new Error('요청에 실패');
};

// 언어 목록 조회 API
export const fetchLanguages = async (keyword) =>
  request(API_END_POINT + `/languages?keyword=${keyword}`);
