import {describe} from 'vitest';
import {fetchFilms, fetchPromo} from '../api-action';
import {film, films} from '../../mocks/films';
import {changeGenre, changePromoFavorite, generalSlice} from './general-store.slice';
import {ALL_GENRES} from '../../const';

describe('General store slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      films: [],
      promo: null,
      genre: ALL_GENRES,
      dataLoading: false,
      error: null
    };

    const result = generalSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      films: [],
      promo: null,
      genre: ALL_GENRES,
      dataLoading: false,
      error: null
    };

    const result = generalSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  describe('fetchFilms', () => {
    it('should return  correct state with pending', () => {
      const expectedState = {
        films: [],
        promo: null,
        genre: ALL_GENRES,
        dataLoading: true,
        error: null
      };

      const result = generalSlice.reducer(undefined, fetchFilms.pending);

      expect(result).toEqual(expectedState);
    });

    it('should return  correct state with fulfilled', () => {
      const expectedState = {
        films: films,
        promo: null,
        genre: ALL_GENRES,
        dataLoading: false,
        error: null
      };

      const result = generalSlice.reducer(undefined, fetchFilms.fulfilled(films, '', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should return  correct state with rejected', () => {
      const error = {
        name: 'errorName',
        message: 'error'
      };
      const expectedState = {
        films: [],
        promo: null,
        genre: ALL_GENRES,
        dataLoading: false,
        error: error
      };

      const result = generalSlice.reducer(undefined, fetchFilms.rejected(error, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchPromo', () => {
    it('should return  correct state with pending', () => {
      const expectedState = {
        films: [],
        promo: null,
        genre: ALL_GENRES,
        dataLoading: true,
        error: null
      };

      const result = generalSlice.reducer(undefined, fetchPromo.pending);

      expect(result).toEqual(expectedState);
    });

    it('should return  correct state with fulfilled', () => {
      const expectedState = {
        films: [],
        promo: film,
        genre: ALL_GENRES,
        dataLoading: false,
        error: null
      };

      const result = generalSlice.reducer(undefined, fetchPromo.fulfilled(film, '', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should return  correct state with rejected', () => {
      const error = {
        name: 'errorName',
        message: 'error'
      };
      const expectedState = {
        films: [],
        promo: null,
        genre: ALL_GENRES,
        dataLoading: false,
        error: error
      };

      const result = generalSlice.reducer(undefined, fetchPromo.rejected(error, '', undefined));

      expect(result).toEqual(expectedState);
    });
  });

  it('should change genre with changeGenre', () => {
    const genre = 'test';
    const expectedState = {
      films: [],
      promo: null,
      genre: genre,
      dataLoading: false,
      error: null
    };

    const result = generalSlice.reducer(undefined, changeGenre(genre));

    expect(result).toEqual(expectedState);
  });

  it('should change promo favorite to true with changePromoFavorite', () => {
    const promo = {
      backgroundImage: '',
      genre: '',
      isFavorite: false,
      posterImage: '',
      released: 0,
      videoLink: '',
      id: '0',
      name: '0'
    };
    const initialState = {
      films: [],
      promo: promo,
      genre: ALL_GENRES,
      dataLoading: false,
      error: null
    };
    const expectedState = {...initialState, promo: {...promo, isFavorite: true}};

    const result = generalSlice.reducer(initialState, changePromoFavorite(true));

    expect(result).toEqual(expectedState);
  });
  it('should change promo favorite to false with changePromoFavorite', () => {
    const promo = {
      backgroundImage: '',
      genre: '',
      isFavorite: true,
      posterImage: '',
      released: 0,
      videoLink: '',
      id: '0',
      name: '0'
    };
    const initialState = {
      films: [],
      promo: promo,
      genre: ALL_GENRES,
      dataLoading: false,
      error: null
    };
    const expectedState = {...initialState, promo: {...promo, isFavorite: false}};

    const result = generalSlice.reducer(initialState, changePromoFavorite(false));

    expect(result).toEqual(expectedState);
  });
});

