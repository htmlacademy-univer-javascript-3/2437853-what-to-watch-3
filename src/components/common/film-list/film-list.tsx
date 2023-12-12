import Film from '../../../types/film';
import FilmCard from '../film-card/film-card';

type FilmListProps = {
  films: Film[];
  filmsCount?: number;
}

function FilmList({films, filmsCount}: FilmListProps) {
  return (
    <div className="catalog__films-list">
      {films.slice(0, filmsCount ? filmsCount : films.length).map((film) => (
        <FilmCard
          key={film.id}
          film={film}
        />
      ))}
    </div>
  );
}

export default FilmList;
