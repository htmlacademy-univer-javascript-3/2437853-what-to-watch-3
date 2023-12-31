import {createAsyncThunk} from '@reduxjs/toolkit';
import {State} from '../types/state';
import {AxiosInstance} from 'axios';
import Film, {FilmShort} from '../types/film';
import {AppDispatch} from '../hooks/use-app-selector';
import {AuthInfo, UserInfo} from '../types/user-info';
import {removeToken, setToken} from '../api/token';
import Comment from '../types/comment';
import Promo from '../types/promo';


export const fetchFilms = createAsyncThunk<FilmShort[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFilms',
  async (_arg, {extra: api}) => {
    const {data} = await api.get<FilmShort[]>('/films');
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

export const fetchSimilar = createAsyncThunk<FilmShort[], string, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchSimilar',
  async (id, {extra: api}) => {
    const {data} = await api.get<FilmShort[]>(`/films/${id}/similar`);
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

export const fetchFavorite = createAsyncThunk<FilmShort[], undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'fetchFavorite',
  async (_, {extra: api}) => {
    const {data} = await api.get<FilmShort[]>('/favorite');
    return data;
  }
);

export const loginGet = createAsyncThunk<UserInfo, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loginGet',
  async (_, {extra: api}) => {
    const {data} = await api.get<AuthInfo>('/login');
    return data;
  }
);

export const loginPost = createAsyncThunk<UserInfo, { email: string; password: string }, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'loginPost',
  async (loginInfo, {extra: api,}) => {
    const {data} = await api.post<AuthInfo>('/login', loginInfo);
    setToken(data.token);
    return data;
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
