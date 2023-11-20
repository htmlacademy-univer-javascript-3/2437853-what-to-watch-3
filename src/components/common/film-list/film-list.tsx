import Film from '../../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';
import {useAppSelector} from '../../../hooks/use-app-selector';

type FilmListProps = {
  films: Film[];
}

function FilmList({films}: FilmListProps) {
  const [selected, setSelected] = useState('');
  const filmsCount = useAppSelector((state) => state.filmsCount);
  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount).map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          selected={selected === film.id}

          onMouseEnter={() => setSelected(film.id)}
          onMouseLeave={() => setSelected('')}
        />
      ))}
    </div>
  );
}

export default FilmList;
