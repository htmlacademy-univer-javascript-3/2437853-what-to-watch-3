import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import Film from './film';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import {Slices} from '../../../types/slices';
import {film, similarFilms} from '../../../mocks/films';
import {comments} from '../../../mocks/comments';

describe('Component: Film page', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<Film/>), makeFakeStore());

    render(withStoreComponent);

    expect(screen.queryByText(/not found/i)).toBeInTheDocument();
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<Film/>), makeFakeStore({
      [Slices.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        dataLoading: false,
      }
    }));

    render(withStoreComponent);

    expect(screen.getByText(film.name)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();
  });
});
