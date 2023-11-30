import Film from './film';

export type State = {
  genre: string;
  genres: string[];
  allFilms: Film[];
  filteredFilms: Film[];
  loading: boolean;
  filmsCount: number;
  currentFilm: Film | null;
  similarFilms: Film[];
}
