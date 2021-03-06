import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

// app
import { App } from './App';

// enable strict mode *and* concurrent mode
const rootElement = document.getElementById('root');
ReactDOM.render(
  <StrictMode>
      <App />
  </StrictMode>,
  rootElement
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.register();
