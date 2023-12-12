import {State} from '../../types/state';
import {Slices} from '../../types/slices';

export const selectFilm = (state: State) => state[Slices.Film].film;
export const selectSimilar = (state: State) => state[Slices.Film].similarFilms;
export const selectComments = (state: State) => state[Slices.Film].comments;
