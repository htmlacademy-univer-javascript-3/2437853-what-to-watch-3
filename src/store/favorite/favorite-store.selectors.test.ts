import {describe, expect} from 'vitest';
import {Slices} from '../../types/slices';
import {selectFavoriteCount, selectFavoriteFilms} from './favorite-store.selectors';
import {favoriteFilms} from '../../mocks/films';

describe('Favorite store selectors', () => {
  const state = {
    [Slices.Favorite]: {
      favoriteCount: favoriteFilms.length,
      favoriteFilms: favoriteFilms,
      dataLoading: false,
    }
  };

  it('should return films from state', () => {
    const {favoriteFilms: films} = state[Slices.Favorite];
    const result = selectFavoriteFilms(state);
    expect(result).toBe(films);
  });

  it('should return favorite films from state', () => {
    const {favoriteFilms: films} = state[Slices.Favorite];
    const result = selectFavoriteFilms(state);
    expect(result.length).toBe(films.length);
  });

  it('should return favorite count from state', () => {
    const {favoriteCount: count} = state[Slices.Favorite];
    const result = selectFavoriteCount(state);
    expect(result).toBe(count);
  });
});
