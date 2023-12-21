import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {makeFakeStore, withStore} from '../../../mocks/components';
import Spinner from './spinner';
import {Slices} from '../../../types/slices';
import {ALL_GENRES} from '../../../const';

describe('Component: Spinner', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(<Spinner/>, makeFakeStore());

    render(withStoreComponent);

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
  });

  it('should render spinner correctly', () => {
    const {withStoreComponent} = withStore(<Spinner/>, makeFakeStore({
      [Slices.General]: {
        films: [],
        genre: ALL_GENRES,
        promo: null,
        dataLoading: true,
      }
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('spinner')).toBeInTheDocument();
  });
});
