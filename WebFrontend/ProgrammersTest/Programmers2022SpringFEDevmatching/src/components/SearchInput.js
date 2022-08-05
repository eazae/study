export default function SearchInput({ $target, initialState, onChange }) {
  // <form> 태그 내 <input>에 focus가 있는 상태에서 엔터키를 입력하면, <form>의 'action'에 지정된 url로 화면이동을 하려는 습성이 있음
  // (<input>을 쓸 때는 <form>으로 감싸는 습관을 들이는 것이 좋음)
  this.$element = document.createElement('form');
  this.$element.className = 'SearchInput';
  this.state = initialState;
  $target.appendChild(this.$element);

  this.render = () => {
    this.$element.innerHTML = `
    <input class="SearchInput__input" type="text" placeholder="프로그램 언어를 입력하세요." value="${this.state}" autofocus>
    `;
  };

  // 이벤트 핸들러 구현
  this.$element.addEventListener('keyup', (e) => {
    const actionIgnoreKeys = ['Enter', 'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
    if (!actionIgnoreKeys.includes(e.key)) onChange(e.target.value);
  });

  // Enter키 입력시에 'submit'이벤트가 일어나기 때문에 처리 필요
  this.$element.addEventListener('submit', (e) => e.preventDefault());

  this.render();
}
