import {createAsyncThunk} from '@reduxjs/toolkit';
import {State} from '../types/state';
import {AxiosInstance} from 'axios';
import Film from '../types/film';
import {setAuthStatus, setCurrentFilm, setFilms, setLoadingStatus, setSimilarFilms, setUser} from './action';
import {AppDispatch} from '../hooks/use-app-selector';
import {AuthStatus} from '../types/auth-status';
import {AuthInfo} from '../types/user-info';
import {setToken} from '../api/token';


export const fetchFilms = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {dispatch, extra:api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<Film[]>('/films');
    dispatch(setLoadingStatus(false));
    dispatch(setFilms(data));
  }
);

export const fetchFilm = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilm',
  async (id, {dispatch, extra:api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<Film>(`/films/${id}`);
    dispatch(setLoadingStatus(false));
    dispatch(setCurrentFilm(data));
  }
);

export const fetchSimilar = createAsyncThunk<void, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSimilar',
  async (id, {dispatch, extra:api}) => {
    dispatch(setLoadingStatus(true));
    const {data} = await api.get<Film[]>(`/films/${id}/similar`);
    dispatch(setLoadingStatus(false));
    dispatch(setSimilarFilms(data));
  }
);

export const loginGet = createAsyncThunk<void, undefined,{
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  "loginGet",
  async (_, {dispatch, extra:api}) => {
    const {data} = await api.get<AuthInfo>('/login');
    dispatch(setAuthStatus(AuthStatus.Authorized));
    dispatch(setUser(data));
    setToken(data.token);
  }
);

export const loginPost = createAsyncThunk<void, {email: string; password: string}, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loginPost',
  async (loginInfo, {dispatch, extra:api}) => {
    const {data} = await api.post<AuthInfo>('/login', loginInfo);
    dispatch(setAuthStatus(AuthStatus.Authorized));
    dispatch(setUser(data));
    setToken(data.token);
  }
);
