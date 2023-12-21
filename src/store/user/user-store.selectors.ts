import {State} from '../../types/state';
import {Slices} from '../../types/slices';

export const selectUser = (state: Pick<State, Slices.User>) => state[Slices.User].user;
export const selectAuthStatus = (state: Pick<State, Slices.User>) => state[Slices.User].authorizationStatus;
export const selectAuthError = (state: Pick<State, Slices.User>) => state[Slices.User].error;
