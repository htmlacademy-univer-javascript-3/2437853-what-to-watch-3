import {describe} from 'vitest';
import {favoriteSlice} from './favorite-store.slice';
import {changeFavorite, fetchFavorite} from '../api-action';
import {favoriteFilms, films} from '../../mocks/films';

describe('Favorite store slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      favoriteCount: 0,
      favoriteFilms: [],
      dataLoading: false,
      error: null
    };

    const result = favoriteSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      favoriteCount: 0,
      favoriteFilms: [],
      dataLoading: false,
      error: null
    };

    const result = favoriteSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return correct state with fetchFavorite.pending', () => {
    const expectedState = {
      favoriteCount: 0,
      favoriteFilms: [],
      dataLoading: true,
      error: null
    };

    const result = favoriteSlice.reducer(undefined, fetchFavorite.pending);

    expect(result).toEqual(expectedState);
  });

  it('should return correct state with fetchFavorite.fulfilled', () => {
    const expectedState = {
      favoriteCount: favoriteFilms.length,
      favoriteFilms: favoriteFilms,
      dataLoading: false,
      error: null
    };

    const result = favoriteSlice.reducer(undefined, fetchFavorite.fulfilled(favoriteFilms, '', undefined));

    expect(result).toEqual(expectedState);
  });

  it('should return correct state with fetchFavorite.rejected', () => {
    const error = {
      name: 'errorName',
      message: 'error'
    };
    const expectedState = {
      favoriteCount: 0,
      favoriteFilms: [],
      dataLoading: false,
      error: error
    };

    const result = favoriteSlice.reducer(undefined, fetchFavorite.rejected(error, '', undefined));

    expect(result).toEqual(expectedState);
  });

  describe('should return correct state with changeFavorite.fulfilled', () => {
    it('add to favorite', () => {
      const expectedState = {
        favoriteCount: 1,
        favoriteFilms: [],
        dataLoading: false,
        error: null
      };

      const result = favoriteSlice.reducer(undefined, changeFavorite.fulfilled(films[1], '', {
        filmId: '',
        status: 0
      }));

      expect(result).toEqual(expectedState);
    });

    it('remove from favorite', () => {
      const initialState = {
        favoriteCount: 1,
        favoriteFilms: [],
        dataLoading: false,
        error: null
      };
      const expectedState = {
        favoriteCount: 0,
        favoriteFilms: [],
        dataLoading: false,
        error: null
      };

      const result = favoriteSlice.reducer(initialState, changeFavorite.fulfilled(films.filter((f) => !f.isFavorite)[0], '', {
        filmId: '',
        status: 1
      }));

      expect(result).toEqual(expectedState);
    });
  });

});

