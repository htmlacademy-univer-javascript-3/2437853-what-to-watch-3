import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import NotFound from './not-found';
import {withHistory} from '../../../mocks/components';
import {createMemoryHistory} from 'history';
import userEvent from '@testing-library/user-event';

describe('Component: Not Found page', () => {
  it('should render correct', () => {
    render(withHistory(
      <NotFound/>
    ));

    expect(screen.getByText(/404/i)).toBeInTheDocument();
    expect(screen.getByRole('link')).toBeInTheDocument();
  });

  it('should redirect correct', async () => {
    const mockHistory = createMemoryHistory();
    render(withHistory(<NotFound/>, mockHistory));

    await userEvent.click(screen.getByRole('link'));
    expect(mockHistory.location.pathname).toBe('/');
  });
});
