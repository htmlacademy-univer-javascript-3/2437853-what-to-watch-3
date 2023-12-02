import React, {useEffect} from 'react';
import type Promo from '../../../types/promo';
import FilmList from '../../common/film-list/film-list';
import GenreList from '../../common/genre-list/genre-list';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {getFilms, setFilmsCount} from '../../../store/action';
import {useDispatch} from 'react-redux';
import ShowMoreButton from '../../common/show-more-button/show-more-button';
import Spinner from '../../common/spinner/spinner';
import UserBlock from "../../common/user-block/user-block";

type MainProps = {
  promo: Promo;
}

function Main(props: MainProps) {

  const selectedGenre = useAppSelector((state) => state.genre);
  const filmsCount = useAppSelector((state) => state.filmsCount);
  const films = useAppSelector((state) => state.filteredFilms);
  const allFilms = useAppSelector((state) => state.allFilms);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setFilmsCount(8));
    dispatch(getFilms());
  }, [selectedGenre, allFilms, dispatch]);

  return (
    <React.Fragment>
      <Spinner/>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={props.promo.backgroundImagePath} alt={props.promo.title}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header film-card__head">
          <div className="logo">
            <a className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <UserBlock/>
        </header>

        <div className="film-card__wrap">
          <div className="film-card__info">
            <div className="film-card__poster">
              <img src={props.promo.posterImagePath} alt={`${props.promo.title} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{props.promo.title}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{props.promo.genre}</span>
                <span className="film-card__year">{props.promo.year}</span>
              </p>

              <div className="film-card__buttons">
                <button className="btn btn--play film-card__button" type="button">
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list film-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList currentGenre={selectedGenre}/>

          <FilmList films={films}/>

          {filmsCount < films.length ? <ShowMoreButton/> : null}
        </section>

        <footer className="page-footer">
          <div className="logo">
            <a className="logo__link logo__link--light">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="copyright">
            <p>© 2023 What to watch Ltd.</p>
          </div>
        </footer>
      </div>
    </React.Fragment>
  );
}

export default Main;
