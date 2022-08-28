export default function ProductList({ $target, initialState }) {
  this.$productList = document.createElement('ul');
  // this.$taget하면 안됨
  $target.appendChild(this.$productList);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    // 리스트가 비어있을 경우
    if (!this.state) return;

    //! this.$element VS $element: this를 붙이면 자동완성 옵션이 보인다 . ex. innerHTML
    this.$productList.innerHTML = `
      ${this.state
        .map(
          (product) => `<li class="Product" data-product-id="${product.id}" >
      <img src="${product.imageUrl}">
      <div class="Product__info">
        <div>${product.name}</div>
        <div>${product.price}원~</div>
      </div>
    </li>`
        )
        .join('')}`;
  };

  this.render();

  // 클릭 시 이동
  this.$productList.addEventListener('click', (e) => {
    const $li = e.target.closest('li');
    // data-product-id 속성
    const { productId } = $li.dataset;

    if (productId) {
      window.history.pushState(null, null, '/web/products/' + productId);
      // App.js에게 알림
      window.dispatchEvent(new CustomEvent('ROUTE_CHANGE_EVENT'));
    }
  });
}
