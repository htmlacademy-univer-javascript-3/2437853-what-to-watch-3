import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchFavorite, fetchFilms, fetchPromo, loginGet} from './store/api-action';
import HistoryRouter from './components/common/history-router/history-router';
import browserHistory from './browser-history';
import ErrorMessage from './components/common/error-message/error-message';
import Spinner from './components/common/spinner/spinner';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

store.dispatch(fetchFilms());
store.dispatch(fetchPromo());
store.dispatch(loginGet()).unwrap().then(() => store.dispatch(fetchFavorite()));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={browserHistory}>
        <ErrorMessage/>
        <Spinner/>
        <App/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
