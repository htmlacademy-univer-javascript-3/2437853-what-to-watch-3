import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import Promo from './types/promo';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const promo: Promo = {

  Title:'The Grand Budapest Hotel',
  BgImgPath:'img/bg-the-grand-budapest-hotel.jpg',
  PosterImgPath:'img/the-grand-budapest-hotel-poster.jpg',
  Genre:'Drama',
  Year:2014,
};

root.render(
  <React.StrictMode>
    <App promo = {promo}/>
  </React.StrictMode>
);
