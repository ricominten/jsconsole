import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import createCache from '@emotion/cache';
import { CacheProvider } from '@emotion/core';
import store from './store/store';
import App from './containers/App';

document.addEventListener('DOMContentLoaded', async () => {
  const emotionCache = createCache({
    container: document.head
  });

  // Render
  return render(
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <App />
      </Provider>
    </CacheProvider>,
    document.getElementById('root')
  );
});
