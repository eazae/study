import CartPage from './pages/CartPage.js';
import ProductDetailPage from './pages/ProductDetailPage.js';
import ProductListPage from './pages/ProductListPage.js';

export default function App({ $target }) {
  this.route = () => {
    const { pathname } = location;
    console.log(location, pathname);
    // console.log(pathname.indexOf('/web/products'))

    if (pathname === '/') {
      new ProductListPage({ $target }).render();
    } else if (pathname.indexOf('/products/') === 0) {
      // TODO 여기 pathname 처리부분에 주목
      const [, , productId] = pathname.split('/');
      alert(productId);
      new ProductDetailPage({ $target, productId }).render();
      window.location.reload();
    } else if (pathname === '/cart/') {
      new CartPage({ $target }).render();
    } else {
      alert('sdkfj');
    }
  };

  // 이벤트 리스너
  window.addEventListener('ROUTE_CHANGE_EVENT', () => {
    this.route();
  });

  this.route();
}
