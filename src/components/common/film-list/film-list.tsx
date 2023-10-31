import {Film} from '../../../types/film';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmListProps = {
  films: Film[];
}

function FilmList({films}: FilmListProps) {
  const [selected, setSelected] = useState('');
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
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
