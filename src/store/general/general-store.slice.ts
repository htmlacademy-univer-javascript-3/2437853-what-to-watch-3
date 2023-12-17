import {ALL_GENRES} from '../../const';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {fetchFilms, fetchPromo} from '../api-action';
import {Slices} from '../../types/slices';
import {GeneralState} from '../../types/state';


const initialState: GeneralState = {
  films: [],
  promo: null,
  genre: ALL_GENRES,
  dataLoading: false,
  error: null
};

export const generalSlice = createSlice({
  name: Slices.General,
  initialState,
  reducers: {
    changeGenre: (state, action: PayloadAction<string>) => {
      state.genre = action.payload;
    },
    changePromoFavorite: (state, action: PayloadAction<boolean>) => {
      if (state.promo) {
        state.promo.isFavorite = action.payload;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchFilms.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
      })
      .addCase(fetchPromo.pending, (state) => {
        state.dataLoading = true;
        state.error = null;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.films = action.payload;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.promo = action.payload;
      })
      .addCase(fetchFilms.rejected, (state, action) => {
        state.dataLoading = false;
        state.films = [];
        state.error = action.error;
      })
      .addCase(fetchPromo.rejected, (state, action) => {
        state.dataLoading = false;
        state.promo = null;
        state.error = action.error;
      });
  }
});

export const {changeGenre, changePromoFavorite} = generalSlice.actions;
