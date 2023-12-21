import {store} from '../store';
import Film, {FilmShort} from './film';
import Comment from './comment';
import Promo from './promo';
import {AuthStatus} from './auth-status';
import {UserInfo} from './user-info';

export type FilmStore = {
  film: Film | null;
  similarFilms: FilmShort[];
  comments: Comment[];
  dataLoading: boolean;
};

export type GeneralState = {
  films: FilmShort[];
  promo: Promo | null;
  genre: string;
  dataLoading: boolean;
};

export type UserState = {
  authorizationStatus: AuthStatus;

  user: UserInfo | null;
};

export type FavoriteState = {
  favoriteCount: number;
  favoriteFilms: FilmShort[];
  dataLoading: boolean;
};

export type State = ReturnType<typeof store.getState>;
