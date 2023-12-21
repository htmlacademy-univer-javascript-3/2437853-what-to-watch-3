import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import FilmReviews from './film-reviews';
import {makeFakeStore, withHistory, withStore} from '../../../../mocks/components';
import {Slices} from '../../../../types/slices';
import {film, similarFilms} from '../../../../mocks/films';
import {comments} from '../../../../mocks/comments';

describe('Component: FilmReview tab', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<FilmReviews/>), makeFakeStore());

    render(withStoreComponent);

    expect(screen.queryAllByTestId('reviewCard').length).toBe(0);
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<FilmReviews/>), makeFakeStore({
      [Slices.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        dataLoading: false,
      }
    }));

    render(withStoreComponent);

    expect(screen.queryAllByTestId('reviewCard').length).toBe(comments.length);
  });
});
