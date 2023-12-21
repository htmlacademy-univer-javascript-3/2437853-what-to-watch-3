import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import NotFound from './not-found';
import {withHistory} from '../../../mocks/components';

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
});
