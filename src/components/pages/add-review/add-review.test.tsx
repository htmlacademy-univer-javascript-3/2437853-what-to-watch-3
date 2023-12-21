import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import {Slices} from '../../../types/slices';
import AddReview from './add-review';
import {film, similarFilms} from '../../../mocks/films';
import {comments} from '../../../mocks/comments';
import {AuthStatus} from '../../../types/auth-status';

describe('Component: AddReview page', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<AddReview/>), makeFakeStore());

    render(withStoreComponent);

    expect(screen.queryByText(/not found/i)).toBeInTheDocument();
  });

  it('should render login correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<AddReview/>), makeFakeStore({
      [Slices.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        dataLoading: false,
      }}));

    render(withStoreComponent);

    expect(screen.queryByText(/sign in/i)).toBeInTheDocument();
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<AddReview/>), makeFakeStore({
      [Slices.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        dataLoading: false,
      },
      [Slices.User]: {
        user: null,
        authorizationStatus: AuthStatus.Authorized,
      }
    }));

    render(withStoreComponent);

    expect(screen.getByText('Add review')).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
