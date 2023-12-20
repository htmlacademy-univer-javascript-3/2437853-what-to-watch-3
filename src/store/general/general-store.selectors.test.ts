import {beforeEach, describe, expect} from 'vitest';
import {Slices} from '../../types/slices';
import {film, filmsShort} from '../../mocks/films';
import {
  selectFilms,
  selectGenre,
  selectLoadingError,
  selectLoadingStatus,
  selectPromo
} from './general-store.selectors';
import {ALL_GENRES} from '../../const';
import {State} from '../../types/state';

describe('General store selectors', () => {
  const state = {
    [Slices.General]: {
      films: filmsShort,
      promo: film,
      genre: film.genre,
      dataLoading: false,
      error: null
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
          error: null
        },
        [Slices.Film]: {
          film: null,
          similarFilms: [],
          comments: [],
          dataLoading: false,
          error: null
        },
        [Slices.General]: {
          films: [],
          promo: null,
          genre: ALL_GENRES,
          dataLoading: false,
          error: null
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

  describe('error', () => {
    const error = {
      name: 'errorName',
      message: 'error'
    };

    let state: Omit<State, Slices.User>;
    beforeEach(() => {
      state = {
        [Slices.Favorite]: {
          favoriteCount: 0,
          favoriteFilms: [],
          dataLoading: false,
          error: null
        },
        [Slices.Film]: {
          film: null,
          similarFilms: [],
          comments: [],
          dataLoading: false,
          error: null
        },
        [Slices.General]: {
          films: [],
          promo: null,
          genre: ALL_GENRES,
          dataLoading: false,
          error: null
        }
      };
    });

    it('should return error null', () => {
      const expected = null;
      const result = selectLoadingError(state);
      expect(result).toBe(expected);
    });

    it('should return error from General', () => {
      state[Slices.General].error = error;
      const expected = error;
      const result = selectLoadingError(state);
      expect(result).toBe(expected);
    });

    it('should return error from Film', () => {
      state[Slices.Film].error = error;
      const expected = error;
      const result = selectLoadingError(state);
      expect(result).toBe(expected);
    });

    it('should return error from Favorite', () => {
      state[Slices.Favorite].error = error;
      const expected = error;
      const result = selectLoadingError(state);
      expect(result).toBe(expected);
    });
  });
});
