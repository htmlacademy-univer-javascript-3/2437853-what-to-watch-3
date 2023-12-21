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
      })
      .addCase(fetchPromo.pending, (state) => {
        state.dataLoading = true;
      })
      .addCase(fetchFilms.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.films = action.payload;
      })
      .addCase(fetchPromo.fulfilled, (state, action) => {
        state.dataLoading = false;
        state.promo = action.payload;
      })
      .addCase(fetchFilms.rejected, (state) => {
        state.dataLoading = false;
        state.films = [];
      })
      .addCase(fetchPromo.rejected, (state) => {
        state.dataLoading = false;
        state.promo = null;
      });
  }
});

export const {changeGenre, changePromoFavorite} = generalSlice.actions;
