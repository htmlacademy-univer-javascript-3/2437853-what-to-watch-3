import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import Promo from './types/promo';
import {Provider} from 'react-redux';
import {store} from './store';
import {fetchFilms} from './store/api-action';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const promo: Promo = {

  title: 'The Grand Budapest Hotel',
  backgroundImagePath: 'img/bg-the-grand-budapest-hotel.jpg',
  posterImagePath: 'img/the-grand-budapest-hotel-poster.jpg',
  genre: 'Drama',
  year: 2014,
};

store.dispatch(fetchFilms());

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        promo={promo}
      />
    </Provider>
  </React.StrictMode>
);
