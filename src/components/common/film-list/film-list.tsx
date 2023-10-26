import {Film} from '../../../mocks/films';
import FilmCard from '../film-card/film-card';
import {useState} from 'react';

type FilmListProps = {
  films: Film[];
}

function FilmList({films} : FilmListProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars,@typescript-eslint/ban-ts-comment
  // @ts-ignore
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState(0);
  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmCard key={film.id} id={film.id} title={film.title} imagePath={film.imageBackgroundPath}/>
      ))}
    </div>
  );
}

export default FilmList;
