/* <div class="SelectedLanguage">
        <ul>
          <li>JavaScript</li>
          <li>Python</li>
          <li>Elixir</li>
          <li>Java</li>
          <li>PHP</li>
        </ul>
      </div> */

const MAX_DISPLAY_COUNT = 5;
export default function SelectedLanguages({ $target, initialState }) {
  this.$element = document.createElement('div');
  this.$element.className = 'SelectedLanguage';
  $target.appendChild(this.$element);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;

    if (this.state.length > MAX_DISPLAY_COUNT) {
      const startPosition = this.state.length - MAX_DISPLAY_COUNT;
      this.state = this.state.slice(startPosition, MAX_DISPLAY_COUNT + startPosition);
    }
    this.render();
  };

  this.render = () => {
    this.$element.innerHTML = `<ul>${this.state.map((item) => `<li>${item}</li>`).join('')}</ul>`;
  };

  this.render();
}
