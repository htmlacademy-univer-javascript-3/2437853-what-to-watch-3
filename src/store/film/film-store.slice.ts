import {createSlice} from '@reduxjs/toolkit';
import {fetchComments, fetchFilm, fetchSimilar} from '../api-action';
import {Slices} from '../../types/slices';
import {FilmStore} from '../../types/state';


const initialState: FilmStore = {
  film: null,
  similarFilms: [],
  comments: [],
  dataLoading: false,
  error: null
};

export const filmSlice = createSlice({
  name: Slices.Film,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilm.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
      })
      .addCase(fetchSimilar.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
      })
      .addCase(fetchComments.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
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
      .addCase(fetchFilm.rejected, (state, action) => {
        state.dataLoading = false;
        state.film = null;
        state.error = action.error;
      })
      .addCase(fetchSimilar.rejected, (state, action) => {
        state.dataLoading = false;
        state.similarFilms = [];
        state.error = action.error;
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.dataLoading = false;
        state.comments = [];
        state.error = action.error;
      });
  }
});
