import { fetchLanguages } from './api.js';
import SearchInput from './components/SearchInput.js';
import SelectedLanguages from './components/SelectedLanguages.js';
import Suggestion from './components/Suggestion.js';

export default function App({ $target }) {
  this.state = {
    fetchedLanguages: [],
    selectedLanguages: [],
    keyword: '',
  };

  // 'SearchInput' 컴포넌트를 'App' 컴포넌트를 이용해 랜더링
  let debounce = null; // API 호출 최적화 기법 -> debounce
  const searchInput = new SearchInput({
    $target,
    initialState: '',
    onChange: async (keyword) => {
      if (!keyword.length) {
        this.setState({
          fetchLanguages: [],
        });
      } else {
        /* debounce 기법 적용 (500ms 이내의 입력) */
        clearTimeout(debounce);
        debounce = setTimeout(async () => {
          const languages = await fetchLanguages(keyword);
          console.log(languages);
          this.setState({ fetchedLanguages: languages, keyword: keyword });
          // 새로고침해도 현재상태 유지
          window.localStorage.setItem('cache', JSON.stringify(this.state));
        }, 500);
      }
    },
  });

  const suggestion = new Suggestion({
    $target,
    initialState: { cursor: 0, items: [] },
    onSelect: (language) => {
      // alert(language);

      // 이미 선택된 언어인 경우, 맨 뒤로 보내버리는 처리
      const nextSelectedLanguages = [...this.state.selectedLanguages];

      const index = nextSelectedLanguages.findIndex(
        (selectedLanguage) => selectedLanguage === language
      );

      if (index > -1) {
        //이미 선택된 언어
        nextSelectedLanguages.splice(index, 1);
      }
      nextSelectedLanguages.push(language);

      this.setState({
        ...this.state,
        selectedLanguages: nextSelectedLanguages,
      });

      // 새로고침해도 현재상태 유지
      window.localStorage.setItem('cache', JSON.stringify(this.state));
    },
  });

  const selectedLanguages = new SelectedLanguages({ $target, initialState: [] });

  this.setState = (nextState) => {
    this.state = {
      ...this.state,
      ...nextState,
    };
    suggestion.setState({
      selectedIndex: 0,
      items: this.state.fetchedLanguages,
      keyword: this.state.keyword,
    });

    selectedLanguages.setState(this.state.selectedLanguages);
  };

  // 새로고침 시 캐시된 정보 있는지 확인하고, 있다면 이전 값으로
  const cache = window.localStorage.getItem('cache');

  if (cache) {
    const { fetchedLanguages, selectedLanguages, keyword } = JSON.parse(cache);
    this.setState({ fetchedLanguages, selectedLanguages, keyword });
  }
}
