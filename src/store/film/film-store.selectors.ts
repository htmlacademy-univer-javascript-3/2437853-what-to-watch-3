import {State} from '../../types/state';
import {Slices} from '../../types/slices';

export const selectFilm = (state: Pick<State, Slices.Film>) => state[Slices.Film].film;
export const selectSimilar = (state: Pick<State, Slices.Film>) => state[Slices.Film].similarFilms;
export const selectComments = (state: Pick<State, Slices.Film>) => state[Slices.Film].comments;
