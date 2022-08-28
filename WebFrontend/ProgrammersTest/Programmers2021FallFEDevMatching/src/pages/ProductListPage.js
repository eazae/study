import { fetchProducts } from '../api.js';
import ProductList from '../components/ProductList.js';

export default function ProductListPage({ $target }) {
    const $page = document.createElement('div');
    $page.className = 'ProductListPage';

    $page.innerHTML = `
  <h1>상품목록</h1>
  `;

    this.render = () => {
        $target.appendChild($page);
    };

    // 필요없나
    //   this.state = '';

    this.setState = (nextState) => {
        this.state = nextState;
    };

    const getList = async () => {
        const list = await fetchProducts();
        this.setState(list);

        // mine (해설에 누락?)
        console.log(this.state);
        productList.setState(list);
    };

    const productList = new ProductList({
        $target: $page,
        initialState: this.state
    })

    // 페이지 생성 시 API 요청해오도록 하는 처리
    getList();
}
