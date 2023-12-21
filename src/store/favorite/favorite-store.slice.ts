import {createSlice} from '@reduxjs/toolkit';
import {Slices} from '../../types/slices';
import {FavoriteState} from '../../types/state';
import {changeFavorite, fetchFavorite} from '../api-action';

const initialState: FavoriteState = {
  favoriteCount: 0,
  favoriteFilms: [],
  dataLoading: false,
};

export const favoriteSlice = createSlice({
  name: Slices.Favorite,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFavorite.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(fetchFavorite.fulfilled, (state, action) => {
        state.favoriteFilms = action.payload;
        state.favoriteCount = state.favoriteFilms.length;
        state.dataLoading = false;
      })
      .addCase(fetchFavorite.rejected, (state) => {
        state.dataLoading = false;
        state.favoriteFilms = [];
        state.favoriteCount = 0;
      })
      .addCase(changeFavorite.fulfilled, (state, action) => {
        state.favoriteCount += action.payload.isFavorite ? 1 : -1;
      });
  }
});
