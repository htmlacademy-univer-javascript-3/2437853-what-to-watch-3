import {createAsyncThunk} from '@reduxjs/toolkit';
import {State} from '../types/state';
import {AxiosInstance} from 'axios';
import Film from '../types/film';
import {setCurrentFilm, setFilms, setLoadingStatus, setSimilarFilms} from './action';
import {AppDispatch} from '../hooks/use-app-selector';


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
