import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import {Slices} from '../../../types/slices';
import {favoriteFilms} from '../../../mocks/films';
import MyList from './my-list';

describe('Component: MyList page', () => {
  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<MyList/>), makeFakeStore({
      [Slices.Favorite]: {
        favoriteFilms: favoriteFilms,
        favoriteCount: favoriteFilms.length,
        dataLoading: false,
      }
    }));

    render(withStoreComponent);

    expect(screen.getByText(favoriteFilms[0].name)).toBeInTheDocument();
    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });
});
