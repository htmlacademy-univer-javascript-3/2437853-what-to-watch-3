import {describe} from 'vitest';
import {loginGet, loginPost, logout} from '../api-action';
import {userSlice} from './user-store.slice';
import {AuthStatus} from '../../types/auth-status';
import {authError, user} from '../../mocks/user';

describe('General store slice', () => {
  it('should return initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authorizationStatus: AuthStatus.Unknown,
      user: null,
      error: null
    };

    const result = userSlice.reducer(expectedState, emptyAction);

    expect(result).toEqual(expectedState);
  });

  it('should return default initial state with empty action', () => {
    const emptyAction = {type: ''};
    const expectedState = {
      authorizationStatus: AuthStatus.Unknown,
      user: null,
      error: null
    };

    const result = userSlice.reducer(undefined, emptyAction);

    expect(result).toEqual(expectedState);
  });

  describe('loginGet', () => {
    it('should return correct state with fulfilled', () => {
      const expectedState = {
        authorizationStatus: AuthStatus.Authorized,
        user: user,
        error: null
      };

      const result = userSlice.reducer(undefined, loginGet.fulfilled(user, '', undefined));

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with rejected', () => {
      const expectedState = {
        authorizationStatus: AuthStatus.Unauthorized,
        user: null,
        error: authError
      };

      const result = userSlice.reducer(undefined, loginGet.rejected(null, '', undefined, authError));

      expect(result).toEqual(expectedState);
    });
  });

  describe('loginPost', () => {
    it('should return correct state with fulfilled', () => {
      const expectedState = {
        authorizationStatus: AuthStatus.Authorized,
        user: user,
        error: null
      };

      const result = userSlice.reducer(undefined, loginPost.fulfilled(user, '', {email:'a.a', password:'a0'}));

      expect(result).toEqual(expectedState);
    });

    it('should return correct state with rejected', () => {
      const expectedState = {
        authorizationStatus: AuthStatus.Unauthorized,
        user: null,
        error: authError
      };

      const result = userSlice.reducer(undefined, loginPost.rejected(null, '', {email:'a.a', password:'a0'}, authError));

      expect(result).toEqual(expectedState);
    });
  });

  it('should return correct state with logout.fulfilled', () => {
    const expectedState = {
      authorizationStatus: AuthStatus.Unauthorized,
      user: null,
      error: null
    };
    const initialState = {...expectedState, user: user, authorizationStatus: AuthStatus.Authorized};

    const result = userSlice.reducer(initialState, logout.fulfilled);

    expect(result).toEqual(expectedState);
  });
});

