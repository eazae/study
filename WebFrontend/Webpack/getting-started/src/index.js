// index.js
// ES6
import _ from 'lodash';
// ES5
//// var _ = require('loadash');

function component() {
  var element = document.createElement('div');

  /* lodash is required for the next line to work */
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  // element.innerHTML = 'Hello webpack'; (위와 동일한 코드)

  return element;
}

document.body.appendChild(component());
