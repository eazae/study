/* 'App' 컴포넌트를 생성하는 index.js (index.html에서 호출) */
//? ".js" 뒤에 꼭 붙여야 하는 이유
import App from './src/App.js';

// class 이름으로 찾아서 컴포넌트 생성
new App({ $target: document.querySelector('.App') });
