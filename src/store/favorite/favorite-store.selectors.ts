import {Slices} from '../../types/slices';
import {State} from '../../types/state';

export const selectFavoriteCount = (state: State) => state[Slices.Favorite].favoriteCount;
export const selectFavoriteFilms = (state: State) => state[Slices.Favorite].favoriteFilms;
