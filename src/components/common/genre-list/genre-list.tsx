import {useDispatch} from 'react-redux';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {useMemo} from 'react';
import {ALL_GENRES} from '../../../const';
import {changeGenre} from '../../../store/general/general-store.slice';
import {selectFilms} from '../../../store/general/general-store.selectors';

type GenreListProps = {
  currentGenre: string;
}

function GenreList(props: GenreListProps) {
  const dispatch = useDispatch();
  const allFilms = useAppSelector(selectFilms);
  const genres = useMemo(() => [ALL_GENRES, ...new Set(allFilms.map((film) => film.genre))], [allFilms]);

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item${genre === props.currentGenre ? ' catalog__genres-item--active' : ''}`}
        >
          <button
            type='button'
            style={{border: 0, background: 'transparent'}}
            className="catalog__genres-link"
            onClick={() => dispatch(changeGenre(genre))}
            data-testid={`button-${genre}`}
          >
            {genre}
          </button>
        </li>))}
    </ul>);
}

export default GenreList;
