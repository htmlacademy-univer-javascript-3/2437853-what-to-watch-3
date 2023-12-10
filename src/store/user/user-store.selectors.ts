import {State} from '../../types/state';
import {Slices} from '../../types/slices';

export const selectUser = (state: State) => state[Slices.User].user;
export const selectAuthStatus = (state: State) => state[Slices.User].authorizationStatus;
export const selectAuthError = (state: State) => state[Slices.User].error;
