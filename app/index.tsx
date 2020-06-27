import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './containers/App';

document.addEventListener('DOMContentLoaded', () =>
  render(React.createElement(Provider, { store }, <App />), document.getElementById('root'))
);
