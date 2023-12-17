import {Action, ThunkDispatch} from '@reduxjs/toolkit';
import {State} from '../types/state';
import {createApi} from '../api/api';

export type AppThunkDispatch = ThunkDispatch<State, ReturnType<typeof createApi>, Action>;
export const extractActionsTypes = (actions: Action<string>[]) => actions.map(({type}) => type);
