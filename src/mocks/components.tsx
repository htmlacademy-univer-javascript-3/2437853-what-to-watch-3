import HistoryRouter from '../components/common/history-router/history-router';
import {createMemoryHistory, MemoryHistory} from 'history';
import {configureMockStore, MockStore} from '@jedmao/redux-mock-store';
import MockAdapter from 'axios-mock-adapter';
import {State} from '../types/state';
import {createApi} from '../api/api';
import thunk from 'redux-thunk';
import {Action} from '@reduxjs/toolkit';
import {AppThunkDispatch} from './common';
import {Provider} from 'react-redux';
import {AuthStatus} from '../types/auth-status';
import {Slices} from '../types/slices';
import {ALL_GENRES} from '../const';

export function withHistory(component: JSX.Element, history?: MemoryHistory) {
  const memoryHistory = history ?? createMemoryHistory();

  return (
    <HistoryRouter history={memoryHistory}>
      {component}
    </HistoryRouter>
  );
}

type ComponentWithMockStore = {
  withStoreComponent: JSX.Element;
  mockStore: MockStore;
  mockAxiosAdapter: MockAdapter;
}

export function withStore(
  component: JSX.Element,
  initialState: Partial<State> = {},
): ComponentWithMockStore {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  const mockStore = mockStoreCreator(initialState);

  return ({
    withStoreComponent: <Provider store={mockStore}>{component}</Provider>,
    mockStore,
    mockAxiosAdapter,
  });
}

export const makeFakeStore = (initialState?: Partial<State>): State => ({
  [Slices.User]: {
    authorizationStatus: AuthStatus.Unknown,
    user: null,
  },
  [Slices.Favorite]: {
    favoriteCount: 0,
    favoriteFilms: [],
    dataLoading: false,
  },
  [Slices.Film]: {
    film: null,
    similarFilms: [],
    comments: [],
    dataLoading: false,
  },
  [Slices.General]: {
    films: [],
    promo: null,
    genre: ALL_GENRES,
    dataLoading: false,
  },
  ...initialState ?? {},
});
