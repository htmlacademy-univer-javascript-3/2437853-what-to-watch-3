import {Slices} from '../../types/slices';
import {State} from '../../types/state';

export const selectFilms = (state: Pick<State, Slices.General>) => state[Slices.General].films;
export const selectPromo = (state: Pick<State, Slices.General>) => state[Slices.General].promo;
export const selectGenre = (state: Pick<State, Slices.General>) => state[Slices.General].genre;
export const selectLoadingError = (state: Omit<State, Slices.User>) => state[Slices.General].error || state[Slices.Film].error || state[Slices.Favorite].error;
export const selectLoadingStatus = (state: Omit<State, Slices.User>) =>
  state[Slices.General].dataLoading
  || state[Slices.Film].dataLoading
  || state[Slices.Favorite].dataLoading;
