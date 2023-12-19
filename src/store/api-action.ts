import {createAsyncThunk} from '@reduxjs/toolkit';
import {State} from '../types/state';
import {AxiosError, AxiosInstance} from 'axios';
import Film from '../types/film';
import {AppDispatch} from '../hooks/use-app-selector';
import {AuthInfo, UserInfo} from '../types/user-info';
import {removeToken, setToken} from '../api/token';
import Comment from '../types/comment';
import Promo from '../types/promo';
import {ErrorDetailsMessage} from '../types/error-details-message';


export const fetchFilms = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Film[]>('/films');
    return data;
  }
);

export const fetchPromo = createAsyncThunk<Promo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchPromo',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<Promo>('/promo');
    return data;
  }
);

export const fetchFilm = createAsyncThunk<Film, string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilm',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film>(`/films/${id}`);
    return data;
  }
);

export const fetchSimilar = createAsyncThunk<Film[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSimilar',
  async (id, {extra: api}) => {
    const {data} = await api.get<Film[]>(`/films/${id}/similar`);
    return data;
  }
);

export const fetchComments = createAsyncThunk<Comment[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchComments',
  async (id, {extra: api}) => {
    const {data} = await api.get<Comment[]>(`/comments/${id}`);
    return data;
  }
);


export const changeFavorite = createAsyncThunk<Film, { filmId: string; status: number }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'changeFavorite',
  async ({filmId, status}, {extra: api}) => {
    const {data} = await api.post<Film>(`/favorite/${filmId}/${status}`);
    return data;
  }
);

export const fetchFavorite = createAsyncThunk<Film[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorite',
  async (_, {extra: api}) => {
    const {data} = await api.get<Film[]>('/favorite');
    return data;
  }
);

export const loginGet = createAsyncThunk<UserInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ErrorDetailsMessage;
}>(
  'loginGet',
  async (_, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.get<AuthInfo>('/login');
      return data;
    } catch (e) {
      const err = e as AxiosError<ErrorDetailsMessage>;
      throw rejectWithValue(err.response!.data);
    }
  }
);

export const loginPost = createAsyncThunk<UserInfo, { email: string; password: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
  rejectValue: ErrorDetailsMessage;
}>(
  'loginPost',
  async (loginInfo, {extra: api, rejectWithValue}) => {
    try {
      const {data} = await api.post<AuthInfo>('/login', loginInfo);
      setToken(data.token);
      return data;
    } catch (e) {
      const err = e as AxiosError<ErrorDetailsMessage>;
      throw rejectWithValue(err.response!.data);
    }
  }
);

export const logout = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'logout',
  async (_, {extra: api}) => {
    await api.delete('/logout');
    removeToken();
  }
);

export const commentPost = createAsyncThunk<void, { filmId: string; commentRequest: { comment: string; rating: number } }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'commentPost',
  async ({filmId, commentRequest}, {extra: api}) => {
    await api.post(`/comments/${filmId}`, commentRequest);
  }
);
