const API_END_POINT = 'https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev';

// 반복되는 코드 방지와 예외처리를 위해 아래와 같이 request 함수를 만들어서 쓰도록 합시다.
const request = async (url, options = {}) => {
  try {
    const response = await fetch(API_END_POINT + url, {
      // headers: { 'Access-Control-Allow-Origin': '*' },
      // referrerPolicy: 'no-referrer',
      // referrer: 'https://slkdfj',
      // mode: 'cors',
      // credentials: 'omit',
      ...options,
    });

    if (response.ok) {
      const json = await response.json();
      return json;
    }
    throw new Error('API 통신 실패', response.message);
  } catch (e) {
    // alert(e.message);
  }
};

/**
 *
 * @returns
 */
export const fetchProducts = async () => {
  const products = await request('/products');
  return products;
};

/**
 *
 * @param {number} productId
 * @returns
 */
export const fetchProductDetail = async (productId) => {
  const productDetail = await request(`/products/${productId}`);
  return productDetail;
};
