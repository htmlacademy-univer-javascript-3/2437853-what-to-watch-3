import FilmList from './film-list';
import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {filmsShort} from '../../../mocks/films';
import Film from '../../../types/film';

const mockInput = vi.fn();
vi.mock('../film-card/film-card', () => ({
  default: (props: {films: Film[]; filmsCount?: number}) => {
    mockInput(props);
    return <div data-testid="filmCard">card</div>;
  }
}));

describe('Component: Film list', () => {
  it('should render correctly', () => {
    const filmListId = 'filmList';
    const filmCardId = 'filmCard';

    render(
      <FilmList
        films={filmsShort}
        filmsCount={8}
      />
    );

    expect(screen.getByTestId(filmListId)).toBeInTheDocument();
    expect(screen.getAllByTestId(filmCardId).length).toBe(8);
  });
});
