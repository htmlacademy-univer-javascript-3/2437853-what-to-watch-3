import {Link} from 'react-router-dom';
import FilmList from '../../common/film-list/film-list';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-app-selector';
import UserBlock from '../../common/user-block/user-block';
import {useEffect} from 'react';
import {selectFavoriteCount, selectFavoriteFilms} from '../../../store/favorite/favorite-store.selectors';
import {fetchFavorite} from '../../../store/api-action';

function MyList() {
  const dispatch = useAppDispatch();
  const favoriteFilms = useAppSelector(selectFavoriteFilms);
  const favoriteCount = useAppSelector(selectFavoriteCount);
  useEffect(() => {
    dispatch(fetchFavorite());
  },[dispatch]);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <div className="logo">
          <Link to="/" className="logo__link">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{favoriteCount}</span></h1>
        <UserBlock/>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <FilmList films={favoriteFilms}/>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <Link to="/" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </Link>
        </div>

        <div className="copyright">
          <p>© 2023 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  );
}

export default MyList;
