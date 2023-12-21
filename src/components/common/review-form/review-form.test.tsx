import {describe, expect} from 'vitest';
import {createMemoryHistory, MemoryHistory} from 'history';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import {Slices} from '../../../types/slices';
import {film, similarFilms} from '../../../mocks/films';
import {render, screen} from '@testing-library/react';
import {comments} from '../../../mocks/comments';
import ReviewForm from './review-form';
import userEvent from '@testing-library/user-event';
import {extractActionsTypes} from '../../../mocks/common';
import {commentPost} from '../../../store/api-action';

describe('Component: ReviewForm', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<ReviewForm filmId="0"/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore({
      [Slices.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        dataLoading: false,
      }
    }));

    render(withStoreComponent);

    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('radio').length).toBe(10);
  });

  it('should display comment correctly', async () => {
    const withHistoryComponent = withHistory(<ReviewForm filmId="0"/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore({
      [Slices.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        dataLoading: false,
      }
    }));

    render(withStoreComponent);

    await userEvent.type(
      screen.getByRole('textbox'),
      'asdasdasda'
    );

    expect(screen.getByText(/asdasdasda/i)).toBeInTheDocument();
  });

  it('should not send request', async () => {
    const withHistoryComponent = withHistory(<ReviewForm filmId="0"/>, mockHistory);
    const {withStoreComponent, mockStore} = withStore(withHistoryComponent, makeFakeStore({
      [Slices.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        dataLoading: false,
      }
    }));

    render(withStoreComponent);

    await userEvent.type(
      screen.getByRole('textbox'),
      'asdasdasda'
    );
    await userEvent.click(
      screen.getAllByRole('radio')[0]
    );
    await userEvent.click(
      screen.getByRole('button')
    );

    expect(extractActionsTypes(mockStore.getActions())).toEqual([]);
  });

  it('should send request', async () => {
    const withHistoryComponent = withHistory(<ReviewForm filmId="0"/>, mockHistory);
    const {withStoreComponent, mockStore, mockAxiosAdapter} = withStore(withHistoryComponent, makeFakeStore({
      [Slices.Film]: {
        film: film,
        similarFilms: similarFilms,
        comments: comments,
        dataLoading: false,
      }
    }));
    mockAxiosAdapter.onPost('/comments/0').reply(200);

    render(withStoreComponent);

    await userEvent.type(
      screen.getByRole('textbox'),
      'asdasdasdasadasdasdasddgguafguyagfuagfuagfuygafugsf'
    );
    await userEvent.click(
      screen.getAllByRole('radio')[0]
    );
    await userEvent.click(
      screen.getByRole('button')
    );

    expect(extractActionsTypes(mockStore.getActions())).toEqual([
      commentPost.pending.type,
      commentPost.fulfilled.type
    ]);
  });

});
