import {AuthStatus} from '../../types/auth-status';
import {createSlice} from '@reduxjs/toolkit';
import {loginGet, loginPost, logout} from '../api-action';
import {Slices} from '../../types/slices';
import {UserState} from '../../types/state';


const initialState: UserState = {
  authorizationStatus: AuthStatus.Unknown,
  user: null,
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
      })
      .addCase(loginGet.rejected, (state) => {
        state.authorizationStatus = AuthStatus.Unauthorized;
        state.user = null;
      })
      .addCase(loginPost.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Authorized;
        state.user = action.payload;
      })
      .addCase(loginPost.rejected, (state) => {
        state.authorizationStatus = AuthStatus.Unauthorized;
        state.user = null;
      })
      .addCase(logout.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.Unauthorized;
        state.user = null;
      });
  }
});
