import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import {Slices} from '../../../types/slices';
import {film, filmsShort} from '../../../mocks/films';
import Main from './main';
import {ALL_GENRES} from '../../../const';

describe('Component: Main page', () => {
  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<Main/>), makeFakeStore({
      [Slices.General]: {
        films: filmsShort,
        genre: ALL_GENRES,
        promo: film,
        dataLoading: false,
      }
    }));

    render(withStoreComponent);

    expect(screen.getAllByText(film.name)[0]).toBeInTheDocument();
    expect(screen.getAllByText(film.genre)[0]).toBeInTheDocument();
    expect(screen.getByText(film.released)).toBeInTheDocument();
    expect(screen.getByText('Catalog')).toBeInTheDocument();
  });
});
