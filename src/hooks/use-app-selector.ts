import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {store} from '../store';
import {State} from '../types/state';

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
