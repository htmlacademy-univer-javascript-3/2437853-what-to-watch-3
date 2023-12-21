import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchFavorite, fetchFilms, fetchPromo, loginGet} from './store/api-action';
import HistoryRouter from './components/common/history-router/history-router';
import browserHistory from './browser-history';
import Spinner from './components/common/spinner/spinner';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
        <Spinner/>
        <App/>
        <ToastContainer/>
      </HistoryRouter>
    </Provider>
  </React.StrictMode>
);
