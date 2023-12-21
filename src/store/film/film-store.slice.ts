import {createSlice} from '@reduxjs/toolkit';
import {changeFavorite, fetchComments, fetchFilm, fetchSimilar} from '../api-action';
import {Slices} from '../../types/slices';
import {FilmStore} from '../../types/state';


const initialState: FilmStore = {
  film: null,
  similarFilms: [],
  comments: [],
  dataLoading: false,
};

export const filmSlice = createSlice({
  name: Slices.Film,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(fetchSimilar.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(fetchComments.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(fetchFilm.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.film = action.payload;
      })
      .addCase(fetchSimilar.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.similarFilms = action.payload;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.comments = action.payload;
      })
      .addCase(fetchFilm.rejected, (state) => {
        state.dataLoading = false;
        state.film = null;
      })
      .addCase(fetchSimilar.rejected, (state) => {
        state.dataLoading = false;
        state.similarFilms = [];
      })
      .addCase(fetchComments.rejected, (state) => {
        state.dataLoading = false;
        state.comments = [];
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        state.film = action.payload;
      });
  }
});
