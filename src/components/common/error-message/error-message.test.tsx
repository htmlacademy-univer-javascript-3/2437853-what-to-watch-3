import {describe, expect} from 'vitest';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import ErrorMessage from './error-message';
import {Slices} from '../../../types/slices';
import {favoriteFilms} from '../../../mocks/films';
import {render, screen} from '@testing-library/react';

describe('ErrorMessage component', () => {
  it('should render correctly', () => {
    const historyComponent = withHistory(<ErrorMessage/>);
    const {withStoreComponent} = withStore(historyComponent, makeFakeStore({
      [Slices.Favorite]: {
        favoriteFilms: favoriteFilms,
        favoriteCount: favoriteFilms.length,
        dataLoading: false,
        error: {name: 'error'}
      }
    }));
    render(withStoreComponent);

    expect(screen.getByText(/ошибка/i)).toBeInTheDocument();
  });
});
