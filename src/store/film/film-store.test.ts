import {describe} from 'vitest';
import {changeFavorite, fetchComments, fetchFilm, fetchSimilar} from '../api-action';
import {film, similarFilms} from '../../mocks/films';
import {filmSlice} from './film-store.slice';
import {comments} from '../../mocks/comments';

describe('Film store slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      film: null,
      similarFilms: [],
      comments: [],
      dataLoading: false,
      error: null
    };

    const result = filmSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      film: null,
      similarFilms: [],
      comments: [],
      dataLoading: false,
      error: null
    };

    const result = filmSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  describe('fetchFilm', () => {
    it('should return  correct state with pending', () => {
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        dataLoading: true,
        error: null
      };

      const result = filmSlice.reducer(undefined, fetchFilm.pending);

      expect(result).toEqual(expectedState);
    });

    it('should return  correct state with fulfilled', () => {
      const expectedState = {
        film: film,
        similarFilms: [],
        comments: [],
        dataLoading: false,
        error: null
      };

      const result = filmSlice.reducer(undefined, fetchFilm.fulfilled(film, '', ''));

      expect(result).toEqual(expectedState);
    });

    it('should return  correct state with rejected', () => {
      const error = {
        name: 'errorName',
        message: 'error'
      };
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        dataLoading: false,
        error: error
      };

      const result = filmSlice.reducer(undefined, fetchFilm.rejected(error, '', '0'));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchSimilar', () => {
    it('should return  correct state with pending', () => {
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        dataLoading: true,
        error: null
      };

      const result = filmSlice.reducer(undefined, fetchSimilar.pending);

      expect(result).toEqual(expectedState);
    });

    it('should return  correct state with fulfilled', () => {
      const expectedState = {
        film: null,
        similarFilms: similarFilms,
        comments: [],
        dataLoading: false,
        error: null
      };

      const result = filmSlice.reducer(undefined, fetchSimilar.fulfilled(similarFilms, '', '0'));

      expect(result).toEqual(expectedState);
    });

    it('should return  correct state with rejected', () => {
      const error = {
        name: 'errorName',
        message: 'error'
      };
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        dataLoading: false,
        error: error
      };

      const result = filmSlice.reducer(undefined, fetchSimilar.rejected(error, '', '0'));

      expect(result).toEqual(expectedState);
    });
  });

  describe('fetchComments', () => {
    it('should return  correct state with pending', () => {
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        dataLoading: true,
        error: null
      };

      const result = filmSlice.reducer(undefined, fetchComments.pending);

      expect(result).toEqual(expectedState);
    });

    it('should return  correct state with fulfilled', () => {
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: comments,
        dataLoading: false,
        error: null
      };

      const result = filmSlice.reducer(undefined, fetchComments.fulfilled(comments, '', '0'));

      expect(result).toEqual(expectedState);
    });

    it('should return  correct state with rejected', () => {
      const error = {
        name: 'errorName',
        message: 'error'
      };
      const expectedState = {
        film: null,
        similarFilms: [],
        comments: [],
        dataLoading: false,
        error: error
      };

      const result = filmSlice.reducer(undefined, fetchComments.rejected(error, '', '0'));

      expect(result).toEqual(expectedState);
    });
  });

  it('should return correct state with changeFavorite.fulfilled', () => {
    const expectedState = {
      film: film,
      similarFilms: [],
      comments: [],
      dataLoading: false,
      error: null
    };

    const result = filmSlice.reducer(undefined, changeFavorite.fulfilled(film, '', {filmId: '0', status: 0}));

    expect(result).toEqual(expectedState);
  });
});

