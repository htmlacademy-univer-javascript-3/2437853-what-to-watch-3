import {describe, expect} from 'vitest';
import {Slices} from '../../types/slices';
import {AuthStatus} from '../../types/auth-status';
import {authError, user} from '../../mocks/user';
import {selectAuthError, selectAuthStatus, selectUser} from './user-store.selectors';

describe('User store selectors', () => {
  const state = {
    [Slices.User]: {
      authorizationStatus: AuthStatus.Authorized,
      user: user,
      error: authError
    }
  };

  it('should return auth status from state', () => {
    const {authorizationStatus} = state[Slices.User];
    const result = selectAuthStatus(state);
    expect(result).toBe(authorizationStatus);
  });

  it('should return user from state', () => {
    const {user: expected} = state[Slices.User];
    const result = selectUser(state);
    expect(result).toBe(expected);
  });

  it('should return auth error from state', () => {
    const {error} = state[Slices.User];
    const result = selectAuthError(state);
    expect(result).toBe(error);
  });
});
