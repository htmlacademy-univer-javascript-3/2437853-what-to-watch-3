import {createReducer} from '@reduxjs/toolkit';
import {
  changeGenre,
  getFilms,
  getGenres, setAuthStatus, setComments,
  setCurrentFilm,
  setFilms,
  setFilmsCount,
  setLoadingStatus, setPromo,
  setSimilarFilms, setUser
} from './action';
import {State} from '../types/state';
import {ALL_GENRES} from '../const';
import {AuthStatus} from '../types/auth-status';

const initialState: State = {
  genre: ALL_GENRES,
  genres: [ALL_GENRES],
  allFilms: [],
  filteredFilms: [],
  promo: null,
  filmsCount: 8,
  currentFilm: null,
  loading: false,
  similarFilms: [],
  authorizationStatus: AuthStatus.Unknown,
  userInfo: null,
  comments: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.genre = action.payload;
  }).addCase(getFilms, (state) => {
    state.filteredFilms = state.allFilms.filter((film) => state.genre === ALL_GENRES || film.genre === state.genre);
  }).addCase(setFilms, (state, action) => {
    state.allFilms = action.payload;
  }).addCase(setPromo, (state, action) => {
    state.promo = action.payload;
  }).addCase(getGenres, (state) => {
    state.genres = [ALL_GENRES, ...new Set(state.allFilms.map((film) => film.genre))];
  }).addCase(setFilmsCount, (state, action) => {
    state.filmsCount = action.payload;
  }).addCase(setCurrentFilm, (state, action) => {
    state.currentFilm = action.payload;
  }).addCase(setLoadingStatus, (state, action) => {
    state.loading = action.payload;
  }).addCase(setSimilarFilms, (state, action) => {
    state.similarFilms = action.payload;
  }).addCase(setComments, (state, action) => {
    state.comments = action.payload;
  }).addCase(setAuthStatus, (state, action) => {
    state.authorizationStatus = action.payload;
  }).addCase(setUser, (state, action) => {
    state.userInfo = action.payload;
  });
});
