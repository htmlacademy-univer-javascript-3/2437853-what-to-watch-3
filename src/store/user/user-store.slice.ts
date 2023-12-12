import {AuthStatus} from '../../types/auth-status';
import {createSlice} from '@reduxjs/toolkit';
import {loginGet, loginPost, logout} from '../api-action';
import {Slices} from '../../types/slices';
import {UserState} from '../../types/state';


const initialState: UserState = {
  authorizationStatus: AuthStatus.Unknown,
  user: null,
  error: null
};

export const userSlice = createSlice({
  name: Slices.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(loginGet.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Authorized;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginGet.rejected, (state, action) => {
        state.authorizationStatus = AuthStatus.NoAuthorized;
        state.user = null;
        state.error = action.payload ?? null;
      })
      .addCase(loginPost.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Authorized;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginPost.rejected, (state, action) => {
        state.authorizationStatus = AuthStatus.NoAuthorized;
        state.user = null;
        state.error = action.payload ?? null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NoAuthorized;
        state.user = null;
      });
  }
});
