import {beforeEach, describe, expect} from 'vitest';
import {Slices} from '../../types/slices';
import {film, filmsShort} from '../../mocks/films';
import {selectFilms, selectGenre, selectLoadingStatus, selectPromo} from './general-store.selectors';
import {ALL_GENRES} from '../../const';
import {State} from '../../types/state';

describe('General store selectors', () => {
  const state = {
    [Slices.General]: {
      films: filmsShort,
      promo: film,
      genre: film.genre,
      dataLoading: false,
    }
  };

  it('should return film from state', () => {
    const {films: expected} = state[Slices.General];
    const result = selectFilms(state);
    expect(result).toBe(expected);
  });

  it('should return similar films from state', () => {
    const {promo: expected} = state[Slices.General];
    const result = selectPromo(state);
    expect(result).toBe(expected);
  });

  it('should return comments from state', () => {
    const {genre: expected} = state[Slices.General];
    const result = selectGenre(state);
    expect(result).toBe(expected);
  });
});

describe('Store selectors', () => {
  describe('dataLoading', () => {
    let state: Omit<State, Slices.User>;
    beforeEach(() => {
      state = {
        [Slices.Favorite]: {
          favoriteCount: 0,
          favoriteFilms: [],
          dataLoading: false,
        },
        [Slices.Film]: {
          film: null,
          similarFilms: [],
          comments: [],
          dataLoading: false,
        },
        [Slices.General]: {
          films: [],
          promo: null,
          genre: ALL_GENRES,
          dataLoading: false,
        }
      };
    });

    it('should return dataLoading false', () => {
      const expected = false;
      const result = selectLoadingStatus(state);
      expect(result).toBe(expected);
    });

    it('should return dataLoading from General', () => {
      state[Slices.General].dataLoading = true;
      const expected = true;
      const result = selectLoadingStatus(state);
      expect(result).toBe(expected);
    });

    it('should return dataLoading from Film', () => {
      state[Slices.Film].dataLoading = true;
      const expected = true;
      const result = selectLoadingStatus(state);
      expect(result).toBe(expected);
    });

    it('should return dataLoading from Favorite', () => {
      state[Slices.Favorite].dataLoading = true;
      const expected = true;
      const result = selectLoadingStatus(state);
      expect(result).toBe(expected);
    });
  });
});
