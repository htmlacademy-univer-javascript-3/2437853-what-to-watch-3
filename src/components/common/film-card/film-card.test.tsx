import {describe, expect} from 'vitest';
import {createMemoryHistory, MemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FilmCard from './film-card';
import {film, filmShort} from '../../../mocks/films';
import {withHistory} from '../../../mocks/components';

describe('Component: FilmCard', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<FilmCard film={filmShort}/>, mockHistory);

    render(withHistoryComponent);

    expect(screen.getByText(film.name)).toBeInTheDocument();
  });

  it('should handle click correctly', async () => {
    const withHistoryComponent = withHistory(<FilmCard film={filmShort}/>, mockHistory);

    render(withHistoryComponent);

    await userEvent.click(
      screen.getByRole('link')
    );
    expect(mockHistory.location.pathname).toBe('/films/0');
  });
});
