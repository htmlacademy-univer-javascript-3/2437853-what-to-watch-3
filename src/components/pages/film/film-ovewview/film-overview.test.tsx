import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {film} from '../../../../mocks/films';
import FilmOverview from './film-overview';

describe('Component: Film Overview tab', () => {
  it('should render correct', () => {
    const fields = [/ratings/, /Director/, /Starring/];

    render(
      <FilmOverview
        film={film}
      />
    );

    for (const field of fields) {
      expect(screen.getByText(field)).toBeInTheDocument();
    }
  });
});
