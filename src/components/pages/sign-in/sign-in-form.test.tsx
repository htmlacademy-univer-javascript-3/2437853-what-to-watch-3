import {describe, expect} from 'vitest';
import {createMemoryHistory, MemoryHistory} from 'history';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {extractActionsTypes} from '../../../mocks/common';
import {fetchFavorite, loginPost} from '../../../store/api-action';
import SignInForm from './sign-in-form';
import {authInfo} from '../../../mocks/user';

describe('Component: ReviewForm', () => {
  let mockHistory: MemoryHistory;

  beforeEach(() => {
    mockHistory = createMemoryHistory();
  });

  it('should render correctly', () => {
    const withHistoryComponent = withHistory(<SignInForm/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Password')).toBeInTheDocument();
    expect(screen.getByText('Email address')).toBeInTheDocument();
  });

  it('should display data correctly', async () => {
    const withHistoryComponent = withHistory(<SignInForm/>, mockHistory);
    const {withStoreComponent} = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    await userEvent.type(
      screen.getByTestId('email'),
      'asdasdasda'
    );
    await userEvent.type(
      screen.getByTestId('password'),
      'dadasdasdasd'
    );

    expect(screen.getByDisplayValue(/asdasdasda/i)).toBeInTheDocument();
    expect(screen.getByDisplayValue(/dadasdasdasd/i)).toBeInTheDocument();
  });

  it('should not send request', async () => {
    const withHistoryComponent = withHistory(<SignInForm/>, mockHistory);
    const {withStoreComponent, mockStore} = withStore(withHistoryComponent, makeFakeStore());

    render(withStoreComponent);

    await userEvent.type(
      screen.getByTestId('email'),
      'asdasdasda'
    );
    await userEvent.type(
      screen.getByTestId('password'),
      'dadasdasdasd'
    );
    await userEvent.click(
      screen.getByRole('button')
    );

    expect(extractActionsTypes(mockStore.getActions())).toEqual([]);
  });

  it('should send request', async () => {
    const withHistoryComponent = withHistory(<SignInForm/>, mockHistory);
    const {withStoreComponent, mockStore, mockAxiosAdapter} = withStore(withHistoryComponent, makeFakeStore());
    mockAxiosAdapter.onPost('/login').reply(200, authInfo);

    render(withStoreComponent);

    await userEvent.type(
      screen.getByTestId('email'),
      'amail@amail.com'
    );
    await userEvent.type(
      screen.getByTestId('password'),
      'dadas0dasdasd'
    );
    await userEvent.click(
      screen.getByRole('button')
    );

    expect(extractActionsTypes(mockStore.getActions())).toEqual([
      loginPost.pending.type,
      loginPost.fulfilled.type,
      fetchFavorite.pending.type,
      fetchFavorite.rejected.type
    ]);
  });
});
