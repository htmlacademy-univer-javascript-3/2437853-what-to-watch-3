import {createReducer} from '@reduxjs/toolkit';
import {changeGenre, getFilms} from './action';
import allFilms from '../mocks/films';
import {State} from '../types/state';
import {AllGenres} from '../const';

const initialState : State = {
  genre: AllGenres,
  films: []
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(changeGenre, (state, action) => {
    state.genre = action.payload;
  });
  builder.addCase(getFilms, (state) => {
    state.films = allFilms.filter((film) => state.genre === AllGenres || film.genre === state.genre);
  });
});
