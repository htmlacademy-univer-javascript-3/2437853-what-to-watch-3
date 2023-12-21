import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import ShowMoreButton from './show-more-button';

describe('Component: Show more button', () => {
  it('should render correct', () => {
    render(
      <ShowMoreButton
        onClick={vi.fn}
      />
    );

    expect(screen.getByText('Show more')).toBeInTheDocument();
  });
});
