import {createAction} from '@reduxjs/toolkit';
import Film from '../types/film';

export const changeGenre = createAction<string>('changeGenre');
export const setFilms = createAction<Film[]>('setFilms');
export const getFilms = createAction('getFilms');
export const getGenres = createAction('getGenres');
export const setFilmsCount = createAction<number>('setFilmsCount');
export const setLoadingStatus = createAction<boolean>('setLoading');
export const setCurrentFilm = createAction<Film>('setCurrentFilm');
export const setSimilarFilms = createAction<Film[]>('setSimilarFilms');
