import Film from './film';

export type State = {
  genre: string;
  genres: string[];
  films: Film[];
  filmsCount: number;
}
