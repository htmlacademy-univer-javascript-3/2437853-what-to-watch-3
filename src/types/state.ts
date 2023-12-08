import Film from './film';
import {AuthStatus} from './auth-status';
import {UserInfo} from './user-info';
import Comment from './comment';
import Promo from './promo';

export type State = {
  genre: string;
  genres: string[];
  allFilms: Film[];
  filteredFilms: Film[];
  promo: Promo | null;
  loading: boolean;
  filmsCount: number;
  currentFilm: Film | null;
  similarFilms: Film[];
  comments: Comment[];
  authorizationStatus: AuthStatus;
  userInfo: UserInfo | null;
}
