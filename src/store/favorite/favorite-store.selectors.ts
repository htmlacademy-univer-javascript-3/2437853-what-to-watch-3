import {Slices} from '../../types/slices';
import {State} from '../../types/state';

export const selectFavoriteCount = (state: Pick<State, Slices.Favorite>) => state[Slices.Favorite].favoriteCount;
export const selectFavoriteFilms = (state: Pick<State, Slices.Favorite>) => state[Slices.Favorite].favoriteFilms;
