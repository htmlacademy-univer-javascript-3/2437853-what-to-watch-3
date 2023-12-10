import Film from '../../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmListProps = {
  films: Film[];
  filmsCount?: number;
}

function FilmList({films, filmsCount}: FilmListProps) {
  const [selected, setSelected] = useState('');
  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount ? filmsCount : films.length).map((film) => (
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
