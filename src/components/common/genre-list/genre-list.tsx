import {useDispatch} from 'react-redux';
import {changeGenre, getGenres} from '../../../store/action';
import {useAppSelector} from '../../../hooks/use-app-selector';
import {useEffect} from 'react';

type GenreListProps = {
  currentGenre: string;
}

function GenreList(props: GenreListProps) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
  }, [dispatch]);

  const genres = useAppSelector((state) => state.genres);
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
          >
            {genre}
          </button>
        </li>))}
    </ul>);
}

export default GenreList;
