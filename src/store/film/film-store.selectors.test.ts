import {describe, expect} from 'vitest';
import {Slices} from '../../types/slices';
import {selectComments, selectFilm, selectSimilar} from './film-store.selectors';
import {film, similarFilms} from '../../mocks/films';
import {comments} from '../../mocks/comments';

describe('Film store selectors', () => {
  const state = {
    [Slices.Film]: {
      film: film,
      similarFilms: similarFilms,
      comments: comments,
      dataLoading: false,
      error: null
    }
  };

  it('should return film from state', () => {
    const {film:expected} = state[Slices.Film];
    const result = selectFilm(state);
    expect(result).toBe(expected);
  });

  it('should return similar films from state', () => {
    const {similarFilms:expected} = state[Slices.Film];
    const result = selectSimilar(state);
    expect(result).toBe(expected);
  });

  it('should return comments from state', () => {
    const {comments:expected} = state[Slices.Film];
    const result = selectComments(state);
    expect(result).toBe(expected);
  });
});
