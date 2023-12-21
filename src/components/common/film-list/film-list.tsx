import {FilmShort} from '../../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: FilmShort[];
  filmsCount?: number;
}

function FilmList({films, filmsCount}: FilmListProps) {
  return (
    <div className="catalog__films-list" data-testid="filmList">
      {films.slice(0, filmsCount ? filmsCount : films.length).map((film) => (
        <FilmCard
          key={film.id}
          film={film}
          data-testid="filmCard"
        />
      ))}
    </div>
  );
}

export default FilmList;
