import {Link} from 'react-router-dom';
import FilmList from '../../common/film-list/film-list';
import {useFilm} from '../../../hooks/use-film';
import Tabs from './tabs';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-app-selector';
import {useEffect} from 'react';
import {fetchComments, fetchSimilar} from '../../../store/api-action';
import NotFound from '../not-found/not-found';
import UserBlock from '../../common/user-block/user-block';
import {AuthStatus} from '../../../types/auth-status';
import {selectSimilar} from '../../../store/film/film-store.selectors';
import {selectAuthStatus} from '../../../store/user/user-store.selectors';
import PlayButton from '../../common/buttons/play-button/play-button';
import MyListButton from '../../common/buttons/my-list-button/my-list-button';


function Film() {
  const dispatch = useAppDispatch();
  const {film, id} = useFilm();
  const authStatus = useAppSelector(selectAuthStatus);

  useEffect(() => {
    if (id) {
      dispatch(fetchSimilar(id));
      dispatch(fetchComments(id));
    }
  }, [dispatch, id]);
  const films = useAppSelector(selectSimilar);

  if (!film) {
    return <NotFound/>;
  }

  return (
    <>
      <section className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img src={film.backgroundImage} alt={film.name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <header className="page-header film-card__head">
            <div className="logo">
              <Link to="/" className="logo__link">
                <span className="logo__letter logo__letter--1">W</span>
                <span className="logo__letter logo__letter--2">T</span>
                <span className="logo__letter logo__letter--3">W</span>
              </Link>
            </div>

            <UserBlock/>
          </header>

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{film.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{film.genre}</span>
                <span className="film-card__year">{film.released}</span>
              </p>

              <div className="film-card__buttons">
                <PlayButton filmId={film.id}/>
                <MyListButton filmId={film.id} isFavorite={film.isFavorite}/>
                {
                  authStatus === AuthStatus.Authorized
                    ? (<Link to={`/films/${film.id}/review`} className="btn film-card__button">Add review</Link>)
                    : null
                }
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img src={film.posterImage} alt={`${film.name} poster`} width="218" height="327"/>
            </div>

            <Tabs film={film}/>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <FilmList films={films.slice(0, 4)}/>
        </section>

        <footer className="page-footer">
          <div className="logo">
            <Link to='/' className="logo__link logo__link--light">
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
    </>
  );
}

export default Film;
