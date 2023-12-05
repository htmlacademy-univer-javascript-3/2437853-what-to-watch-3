import Film from './film';
import {AuthStatus} from './auth-status';
import {UserInfo} from './user-info';

export type State = {
  genre: string;
  genres: string[];
  allFilms: Film[];
  filteredFilms: Film[];
  loading: boolean;
  filmsCount: number;
  currentFilm: Film | null;
  similarFilms: Film[];
  authorizationStatus: AuthStatus;
  userInfo: UserInfo | null;
}
