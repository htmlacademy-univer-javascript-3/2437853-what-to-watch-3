import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {State} from '../types/state';
import {store} from '../store';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
