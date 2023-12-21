import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import FilmDetails from './film-details';
import {film} from '../../../../mocks/films';

describe('Component: Film Details tab', () => {
  it('should render correct', () => {
    const fields = ['Director', 'Starring', 'Run Time', 'Genre', 'Released'];

    render(
      <FilmDetails
        film={film}
      />
    );

    for (const field of fields) {
      expect(screen.getByText(field)).toBeInTheDocument();
    }
  });
});
