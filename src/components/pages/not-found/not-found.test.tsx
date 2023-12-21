import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import NotFound from './not-found';
import {withHistory} from '../../../mocks/components';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

describe('Component: Not Found page', () => {
  it('should render correct', () => {
    const fields = ['404 Not Found', 'На главную'];

    render(withHistory(
      <NotFound/>
    ));

    for (const field of fields) {
      expect(screen.getByText(field)).toBeInTheDocument();
    }
  });

  it('should redirect correct', async () => {
    const mockHistory = createMemoryHistory();
    render(withHistory(<NotFound/>, mockHistory));

    await userEvent.click(screen.getByRole('link'));
    expect(mockHistory.location.pathname).toBe('/');
  });
});
