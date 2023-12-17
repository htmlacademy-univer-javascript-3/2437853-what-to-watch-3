import {describe, expect} from 'vitest';
import {createMemoryHistory, MemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {film, films} from '../../../mocks/films';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import GenreList from './genre-list';
import {ALL_GENRES} from '../../../const';
import {Slices} from '../../../types/slices';
import {extractActionsTypes} from '../../../mocks/common';
import {changeGenre} from '../../../store/general/general-store.slice';

describe('Component: GenreList', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<GenreList currentGenre={ALL_GENRES}/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore({
      [Slices.General]: {
        films: films,
        genre: ALL_GENRES,
        promo: film,
        dataLoading: false,
        error: null
      }
    }));

    render(withStoreComponent);

    expect(screen.getByText(ALL_GENRES)).toBeInTheDocument();
    expect(screen.getByText(film.genre)).toBeInTheDocument();
  });

  it('should handle click correctly', async () => {
    const withHistoryComponent = withHistory(<GenreList currentGenre={ALL_GENRES}/>, mockHistory);
    const {withStoreComponent, mockStore} = withStore(withHistoryComponent, makeFakeStore({
      [Slices.General]: {
        films: films,
        genre: ALL_GENRES,
        promo: film,
        dataLoading: false,
        error: null
      }
    }));

    render(withStoreComponent);

    await userEvent.click(
      screen.getByTestId(`button-${film.genre}`)
    );
    const actions = mockStore.getActions();
    expect(extractActionsTypes(actions)).toEqual([
      changeGenre.type
    ]);
    expect((actions.at(0) as ReturnType<typeof changeGenre>).payload).toBe(film.genre);
  });
});
