import React, {useCallback, useEffect, useMemo, useState} from 'react';
import FilmList from '../../common/film-list/film-list';
import GenreList from '../../common/genre-list/genre-list';
import {useAppDispatch, useAppSelector} from '../../../hooks/use-app-selector';
import ShowMoreButton from '../../common/show-more-button/show-more-button';
import UserBlock from '../../common/user-block/user-block';
import {FilmShort} from '../../../types/film';
import {selectFilms, selectGenre, selectPromo} from '../../../store/general/general-store.selectors';
import {ALL_GENRES} from '../../../const';
import PlayButton from '../../common/buttons/play-button/play-button';
import MyListButton from '../../common/buttons/my-list-button/my-list-button';
import {changePromoFavorite} from '../../../store/general/general-store.slice';

function filterFilms(films: FilmShort[], genre: string) {
  return genre === ALL_GENRES ? films : films.filter((film) => film.genre === genre);
}

function Main() {

  const selectedGenre = useAppSelector(selectGenre);
  const allFilms = useAppSelector(selectFilms);
  const promo = useAppSelector(selectPromo);
  const [filmsCount, setFilmsCount] = useState(8);
  const films = useMemo(() => filterFilms(allFilms, selectedGenre), [allFilms, selectedGenre]);
  const dispatch = useAppDispatch();

  const showMore = useCallback((count: number) => setFilmsCount(count + 8), []);

  useEffect(() => {
    setFilmsCount(8);
  }, [selectedGenre, allFilms, dispatch]);

  return (
    <React.Fragment>
      <section className="film-card">
        <div className="film-card__bg">
          <img src={promo?.backgroundImage} alt={promo?.name}/>
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
              <img src={promo?.posterImage} alt={`${promo?.name ?? ''} poster`} width="218" height="327"/>
            </div>

            <div className="film-card__desc">
              <h2 className="film-card__title">{promo?.name}</h2>
              <p className="film-card__meta">
                <span className="film-card__genre">{promo?.genre}</span>
                <span className="film-card__year">{promo?.released}</span>
              </p>

              <div className="film-card__buttons">
                {promo ? <PlayButton filmId={promo?.id}/> : null}
                {promo ?
                  <MyListButton
                    filmId={promo?.id}
                    isFavorite={promo.isFavorite}
                    onClickAfter={(toggle) => {
                      dispatch(changePromoFavorite(!toggle));
                    }}
                  /> : null}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <GenreList currentGenre={selectedGenre}/>

          <FilmList films={films} filmsCount={filmsCount}/>

          {filmsCount < films.length ? <ShowMoreButton onClick={() => showMore(filmsCount)}/> : null}
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
