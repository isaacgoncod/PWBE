import React from 'react';
import ReactDOM from 'react-dom';

import GlobalStyle from './styles/global';

import App from './components/App';

ReactDOM.render(
  <>
    <GlobalStyle />
    <App />
  </>,

  document.getElementById('root')
);
