import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import {Slices} from '../../../types/slices';
import UserBlock from './user-block';
import {user} from '../../../mocks/user';
import {AuthStatus} from '../../../types/auth-status';
import {extractActionsTypes} from '../../../mocks/common';
import {logout} from '../../../store/api-action';
import userEvent from '@testing-library/user-event';

describe('Component: UserBlock', () => {
  it('should render correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<UserBlock/>), makeFakeStore());

    render(withStoreComponent);

    expect(screen.queryByText(/sign in/i)).toBeInTheDocument();
  });

  it('should render user correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<UserBlock/>), makeFakeStore({
      [Slices.User]: {
        user: user,
        authorizationStatus: AuthStatus.Authorized,
      }
    }));

    render(withStoreComponent);

    expect(screen.queryByText(/Sign out/i)).toBeInTheDocument();
  });

  it('should handle logout correctly', async () => {
    const {withStoreComponent, mockStore} = withStore(withHistory(<UserBlock/>), makeFakeStore({
      [Slices.User]: {
        user: user,
        authorizationStatus: AuthStatus.Authorized,
      }
    }));

    render(withStoreComponent);

    await userEvent.click(screen.getByText(/sign out/i));

    expect(extractActionsTypes(mockStore.getActions())).toEqual([
      logout.pending.type,
      logout.rejected.type
    ]);
  });
});
