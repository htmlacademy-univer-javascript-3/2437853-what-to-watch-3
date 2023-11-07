import Main from '../pages/main/main';
import Promo from '../../types/promo';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SignIn from '../pages/sign-in/sign-in';
import MyList from '../pages/my-list/my-list';
import Film from '../pages/film/film';
import AddReview from '../pages/add-review/add-review';
import Player from '../pages/player/player';
import NotFound from '../pages/not-found/not-found';
import PrivateRoute from '../common/private-route/private-route';
import films from '../../mocks/films';
import type FilmType from '../../types/film';

type AppProps = {
  promo: Promo;
  films: FilmType[];
}

function App(props: AppProps) {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <Main
            films={props.films}
            promo={props.promo}
          />
        }
        />
        <Route path="/login" element={<SignIn/>}/>
        <Route path="/mylist" element={
          <PrivateRoute>
            <MyList films={films.filter((f) => f.isFavorite)}/>
          </PrivateRoute>
        }
        />
        <Route path="/films/:id" element={<Film films={props.films}/>}/>
        <Route path="/films/:id/review" element={<AddReview films={props.films}/>}/>
        <Route path="/player/:id" element={<Player films={props.films}/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
