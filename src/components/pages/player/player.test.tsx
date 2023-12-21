import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import {Slices} from '../../../types/slices';
import {film, similarFilms} from '../../../mocks/films';
import Player from './player';
import {comments} from '../../../mocks/comments';
import userEvent from '@testing-library/user-event';

describe('Component: MyList page', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<Player/>), makeFakeStore({}));

    render(withStoreComponent);

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<Player/>), makeFakeStore({
      [Slices.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        dataLoading: false,
      }
    }));

    render(withStoreComponent);

    expect(screen.getByTestId('player')).toBeInTheDocument();
    expect(screen.getByText('Exit')).toBeInTheDocument();
    expect(screen.getByText('Play')).toBeInTheDocument();
    expect(screen.getByText('Full screen')).toBeInTheDocument();
  });

  it('should pause correctly', async () => {
    const {withStoreComponent} = withStore(withHistory(<Player/>), makeFakeStore({
      [Slices.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        dataLoading: false,
      }
    }));

    HTMLMediaElement.prototype.play = vi.fn();

    render(withStoreComponent);

    await userEvent.click(screen.getByText('Play'));

    expect(screen.getByTestId('player')).toBeInTheDocument();
    expect(screen.getByText('Pause')).toBeInTheDocument();
  });
});
