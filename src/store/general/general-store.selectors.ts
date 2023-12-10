import {Slices} from '../../types/slices';
import {State} from '../../types/state';

export const selectFilms = (state: State) => state[Slices.General].films;
export const selectPromo = (state: State) => state[Slices.General].promo;
export const selectGenre = (state: State) => state[Slices.General].genre;
export const selectLoadingError = (state: State) => state[Slices.General].error || state[Slices.Film].error;
export const selectLoadingStatus = (state: State) => state[Slices.General].dataLoading || state[Slices.Film].dataLoading;
