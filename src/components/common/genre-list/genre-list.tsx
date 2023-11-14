import Film from '../../../types/film';
import {useDispatch} from 'react-redux';
import {changeGenre} from '../../../store/action';
import {AllGenres} from '../../../const';

type GenreListProps = {
  films: Film[];
  currentGenre: string;
}

function GenreList(props: GenreListProps) {
  let genres = [AllGenres];
  genres.push(...props.films.map((film) => film.genre));
  genres = genres.filter((genre, index) => genres.indexOf(genre) === index);

  const dispatch = useDispatch();

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre) => (
        <li
          key={genre}
          className={`catalog__genres-item${genre === props.currentGenre ? ' catalog__genres-item--active' : ''}`}
        >
          <div
            className="catalog__genres-link"
            onClick={() => dispatch(changeGenre(genre))}
          >
            {genre}
          </div>
        </li>))}
    </ul>);
}

export default GenreList;
