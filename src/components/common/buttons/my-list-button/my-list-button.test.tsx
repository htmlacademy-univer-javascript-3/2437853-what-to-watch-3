import {describe, expect} from 'vitest';
import {makeFakeStore, withHistory, withStore} from '../../../../mocks/components';
import {createMemoryHistory, MemoryHistory} from 'history';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {extractActionsTypes} from '../../../../mocks/common';
import {changeFavorite} from '../../../../store/api-action';
import MyListButton from './my-list-button';
import {film} from '../../../../mocks/films';

describe('Component: MyListButton', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<MyListButton filmId="0" isFavorite={false}/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByTestId('add')).toBeInTheDocument();
  });

  it('should render correctly isFavorite', () => {
    const withHistoryComponent = withHistory(<MyListButton filmId="0" isFavorite/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByText('My list')).toBeInTheDocument();
    expect(screen.getByTestId('in-list')).toBeInTheDocument();
  });

  it('should handle click correctly', async () => {
    const withHistoryComponent = withHistory(<MyListButton filmId="0" isFavorite={false}/>, mockHistory);
    const {withStoreComponent, mockStore, mockAxiosAdapter} = withStore(withHistoryComponent, makeFakeStore());

    mockAxiosAdapter.onPost('/favorite/0/0').reply(200, {...film, isFavorite: true});
    mockAxiosAdapter.onPost('/favorite/0/1').reply(200, {...film, isFavorite: true});

    render(withStoreComponent);

    expect(screen.getByTestId('add')).toBeInTheDocument();
    await userEvent.click(
      screen.getByRole('button')
    );
    const actions = extractActionsTypes(mockStore.getActions());
    expect(actions).toEqual([
      changeFavorite.pending.type,
      changeFavorite.fulfilled.type
    ]);
  });
});
