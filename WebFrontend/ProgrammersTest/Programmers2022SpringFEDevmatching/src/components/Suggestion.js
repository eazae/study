/*  <div class="Suggestion">
        <ul>
          <li class="Suggestion__item--selected">Action<span class="Suggestion__item--matched">Script</span></li>
          <li>Java<span class="Suggestion__item--matched">Script</span></li>
          <li>Type<span class="Suggestion__item--matched">Script</span></li>
          <li>Pure<span class="Suggestion__item--matched">Script</span></li>
        </ul>
      </div>  */
export default function Suggestion({ $target, initialState, onSelect }) {
  this.$element = document.createElement('div');
  this.$element.className = 'Suggestion';
  $target.appendChild(this.$element);

  this.state = {
    selectedIndex: 0,
    items: initialState.items,
  };

  // 갱신
  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    this.render();
  };

  this.render = () => {
    const { items = [], selectedIndex, keyword } = this.state;
    if (items.length) {
      this.$element.style.display = 'block';
      this.$element.innerHTML = `<ul>
      ${items
        .map(
          (item, index) =>
            `<li class="${
              index === selectedIndex ? 'Suggestion__item--selected' : ''
            }" data-index="${index}">${this.renderMatchedItem(keyword, item)}</li>`
        )
        .join('')}
        </ul>`;
    } else {
      this.$element.style.display = 'none';
      this.$element.innerHTML = '';
    }
  };

  // 초기 render
  this.render();

  // 키보드 이벤트를 통해 selectedIndex 값을 바꿀 수 있도록
  window.addEventListener('keyup', (e) => {
    if (this.state.items.length) {
      const { selectedIndex } = this.state;
      const lastIndex = this.state.items.length - 1;
      const navigationKeys = ['ArrowUp', 'ArrowDown'];

      let nextIndex = selectedIndex;

      if (navigationKeys.includes(e.key)) {
        if (e.key === 'ArrowUp') {
          nextIndex = selectedIndex === 0 ? lastIndex : nextIndex - 1;
        } else if (e.key === 'ArrowDown') {
          nextIndex = selectedIndex === lastIndex ? 0 : nextIndex + 1;
        }

        this.setState({
          ...this.state,
          selectedIndex: nextIndex,
        });
      } else if (e.key === 'Enter') {
        // Enter키 입력 시 - 현재 커서 위치의 추천검색어를 파라미터로 하여 onSelect 호출
        onSelect(this.state.items[this.state.selectedIndex]);
      }
    }
  });

  // 마우스 클릭 이벤트를 통해서도 select값을 바꿀 수 있도록
  this.$element.addEventListener('click', (e) => {
    // 이벤트 위임 (Event Delegation)
    const $li = e.target.closest('li');
    if ($li) {
      const { index } = $li.dataset;
      try {
        // (parseInt 처리를 안해줘도 JS특성상 동작은 할 것임)
        onSelect(this.state.items[parseInt(index)]);
      } catch (e) {
        alert('ERROR', e);
      }
    }
  });

  // 키워드 부분 강조 -> 정규표현식 이용
  this.renderMatchedItem = (keyword, item) => {
    if (!item.toLowerCase().includes(keyword.toLowerCase())) return item;
    // 정규표현식 이용
    const matchedText = item.match(new RegExp(keyword, 'gi'))[0];
    return item.replace(
      new RegExp(matchedText, 'gi'),
      `<span class="Suggestion__item--matched">${matchedText}</span>`
    );
  };
}
