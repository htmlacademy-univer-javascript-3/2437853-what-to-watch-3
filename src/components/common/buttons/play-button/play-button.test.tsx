import {describe, expect} from 'vitest';
import {withHistory} from '../../../../mocks/components';
import {createMemoryHistory, MemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import PlayButton from './play-button';

describe('Component: MyListButton', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<PlayButton filmId="0"/>, mockHistory);

    render(withHistoryComponent);

    expect(screen.getByText('Play')).toBeInTheDocument();
  });

  it('should handle click correctly', async () => {
    const withHistoryComponent = withHistory(<PlayButton filmId="0"/>, mockHistory);

    render(withHistoryComponent);

    await userEvent.click(
      screen.getByRole('button')
    );
    expect(mockHistory.location.pathname).toBe('/player/0');
  });
});
