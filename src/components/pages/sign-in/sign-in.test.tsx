import {render, screen} from '@testing-library/react';
import {expect} from 'vitest';
import {makeFakeStore, withHistory, withStore} from '../../../mocks/components';
import {Slices} from '../../../types/slices';
import SignIn from './sign-in';
import {AuthStatus} from '../../../types/auth-status';
import {user} from '../../../mocks/user';
import {createMemoryHistory} from 'history';

describe('Component: SignIn page', () => {
  it('should redirect correctly', () => {
    const mockHistory = createMemoryHistory();
    const {withStoreComponent} = withStore(withHistory(<SignIn/>, mockHistory), makeFakeStore({
      [Slices.User]: {
        authorizationStatus: AuthStatus.Authorized,
        user: user,
      }
    }));

    render(withStoreComponent);

    expect(mockHistory.location.pathname).toBe('/');
  });

  it('should render page correctly', () => {
    const {withStoreComponent} = withStore(withHistory(<SignIn/>), makeFakeStore());

    render(withStoreComponent);

    expect(screen.getAllByText('Sign in')[0]).toBeInTheDocument();
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
