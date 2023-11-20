import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilms, getGenres, setFilmsCount} from './action';
import allFilms from '../mocks/films';
import {State} from '../types/state';
import {ALL_GENRES} from '../const';

const initialState : State = {
  genre: ALL_GENRES,
  genres: [ALL_GENRES],
  films: [],
  filmsCount : 8,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(getFilms, (state) => {
    state.films = allFilms.filter((film) => state.genre === ALL_GENRES || film.genre === state.genre);
  });
  builder.addCase(getGenres, (state) =>{
    state.genres = [ALL_GENRES, ...new Set(allFilms.map((film) => film.genre))];
  });
  builder.addCase(setFilmsCount, (state, action) => {
    state.filmsCount = action.payload;
  });
});
