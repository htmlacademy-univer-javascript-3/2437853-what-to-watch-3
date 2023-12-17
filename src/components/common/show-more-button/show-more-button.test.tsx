import {render, screen} from '@testing-library/react';
import {expect, vi} from 'vitest';
import ShowMoreButton from './show-more-button';
import userEvent from '@testing-library/user-event';

describe('Component: Show more button', () => {
  it('should render correctly', () => {
    render(
      <ShowMoreButton
        onClick={vi.fn()}
      />
    );

    expect(screen.getByText('Show more')).toBeInTheDocument();
  });

  it('should handle click correctly', async () => {
    const onClick = vi.fn();
    render(
      <ShowMoreButton
        onClick={onClick}
      />
    );

    await userEvent.click(screen.getByRole('button'));

    expect(onClick).toBeCalledTimes(1);
  });
});
