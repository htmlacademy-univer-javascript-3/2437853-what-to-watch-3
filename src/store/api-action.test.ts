import {createApi} from '../api/api';
import MockAdapter from 'axios-mock-adapter';
import {configureMockStore} from '@jedmao/redux-mock-store';
import {State} from '../types/state';
import {Action} from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import {AppThunkDispatch, extractActionsTypes} from '../mocks/common';
import {
  changeFavorite,
  fetchComments,
  fetchFavorite,
  fetchFilm,
  fetchFilms,
  fetchPromo,
  fetchSimilar,
  loginGet, loginPost, logout
} from './api-action';
import {favoriteFilms, film, films, similarFilms} from '../mocks/films';
import {comments} from '../mocks/comments';
import {authInfo} from '../mocks/user';
import * as tokenStorage from '../api/token';

describe('Async actions', () => {
  const axios = createApi();
  const mockAxiosAdapter = new MockAdapter(axios);
  const middleware = [thunk.withExtraArgument(axios)];
  const mockStoreCreator = configureMockStore<State, Action<string>, AppThunkDispatch>(middleware);
  let store: ReturnType<typeof mockStoreCreator>;

  beforeEach(() => {
    store = mockStoreCreator({});
  });

  describe('loginGet', () => {
    it('should dispatch "loginGet.pending" and "loginGet.fulfilled" with thunk "loginGet', async () => {
      mockAxiosAdapter.onGet('/login').reply(200);

      await store.dispatch(loginGet());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginGet.pending.type,
        loginGet.fulfilled.type,
      ]);
    });

    it('should dispatch "loginGet.pending" and "loginGet.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet('/login').reply(401);

      await store.dispatch(loginGet());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginGet.pending.type,
        loginGet.rejected.type,
      ]);
    });
  });

  describe('fetchFilms', () => {
    it('should dispatch "fetchFilms.pending", "fetchFilms.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet('/films').reply(200, films);

      await store.dispatch(fetchFilms());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFilms.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFilms.pending.type,
        fetchFilms.fulfilled.type,
      ]);

      expect(fetchFilmsActionFulfilled.payload)
        .toEqual(films);
    });

    it('should dispatch "fetchFilms.pending", "fetchFilms.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet('/films').reply(401, []);

      await store.dispatch(fetchFilms());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilms.pending.type,
        fetchFilms.rejected.type,
      ]);
    });
  });

  describe('fetchPromo', () => {
    it('should dispatch "fetchPromo.pending", "fetchPromo.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet('/promo').reply(200, film);

      await store.dispatch(fetchPromo());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchPromoActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchPromo.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchPromo.pending.type,
        fetchPromo.fulfilled.type,
      ]);

      expect(fetchPromoActionFulfilled.payload)
        .toEqual(film);
    });

    it('should dispatch "fetchPromo.pending", "fetchPromo.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet('/promo').reply(500, null);

      await store.dispatch(fetchPromo());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchPromo.pending.type,
        fetchPromo.rejected.type,
      ]);
    });
  });

  describe('fetchFilm', () => {
    const id = '0';
    it('should dispatch "fetchFilm.pending", "fetchFilm.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet(`/films/${id}`).reply(200, film);

      await store.dispatch(fetchFilm(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFilmActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFilm.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFilm.pending.type,
        fetchFilm.fulfilled.type,
      ]);

      expect(fetchFilmActionFulfilled.payload)
        .toEqual(film);
    });

    it('should dispatch "fetchFilm.pending", "fetchFilm.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`/films/${id}`).reply(400, null);

      await store.dispatch(fetchFilm(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFilm.pending.type,
        fetchFilm.rejected.type,
      ]);
    });
  });

  describe('fetchSimilar', () => {
    const id = '0';
    it('should dispatch "fetchSimilar.pending", "fetchSimilar.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet(`/films/${id}/similar`).reply(200, similarFilms);

      await store.dispatch(fetchSimilar(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchSimilarActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchSimilar.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchSimilar.pending.type,
        fetchSimilar.fulfilled.type,
      ]);

      expect(fetchSimilarActionFulfilled.payload)
        .toEqual(similarFilms);
    });

    it('should dispatch "fetchSimilar.pending", "fetchSimilar.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`/films/${id}/similar`).reply(400, null);

      await store.dispatch(fetchSimilar(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchSimilar.pending.type,
        fetchSimilar.rejected.type,
      ]);
    });
  });

  describe('fetchComments', () => {
    const id = '0';
    it('should dispatch "fetchComments.pending", "fetchComments.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet(`/comments/${id}`).reply(200, comments);

      await store.dispatch(fetchComments(id));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchCommentsActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchComments.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchComments.pending.type,
        fetchComments.fulfilled.type,
      ]);

      expect(fetchCommentsActionFulfilled.payload)
        .toEqual(comments);
    });

    it('should dispatch "fetchComments.pending", "fetchComments.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet(`/comments/${id}`).reply(400, null);

      await store.dispatch(fetchComments(id));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchComments.pending.type,
        fetchComments.rejected.type,
      ]);
    });
  });

  describe('fetchFavorite', () => {
    it('should dispatch "fetchFavorite.pending", "fetchFavorite.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet('/favorite').reply(200, favoriteFilms);

      await store.dispatch(fetchFavorite());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const fetchFavoriteActionFulfilled = emittedActions.at(1) as ReturnType<typeof fetchFavorite.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        fetchFavorite.pending.type,
        fetchFavorite.fulfilled.type,
      ]);

      expect(fetchFavoriteActionFulfilled.payload)
        .toEqual(favoriteFilms);
    });

    it('should dispatch "fetchFavorite.pending", "fetchFavorite.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet('/favorite').reply(400, null);

      await store.dispatch(fetchFavorite());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        fetchFavorite.pending.type,
        fetchFavorite.rejected.type,
      ]);
    });
  });

  describe('changeFavorite', () => {
    const filmId = '0';
    const s = 1;
    it('should dispatch "changeFavorite.pending", "changeFavorite.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onPost(`/favorite/${filmId}/${s}`).reply(200, {...film, isFavorite: true});

      await store.dispatch(changeFavorite({filmId: filmId, status:s}));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const changeFavoriteActionFulfilled = emittedActions.at(1) as ReturnType<typeof changeFavorite.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        changeFavorite.pending.type,
        changeFavorite.fulfilled.type,
      ]);

      expect(changeFavoriteActionFulfilled.payload)
        .toEqual({...film, isFavorite: true});
    });

    it('should dispatch "changeFavorite.pending", "changeFavorite.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost(`/favorite/${filmId}/${s}`).reply(400, null);

      await store.dispatch(changeFavorite({filmId: filmId, status:s}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        changeFavorite.pending.type,
        changeFavorite.rejected.type,
      ]);
    });
  });

  describe('loginGet', () => {
    it('should dispatch "loginGet.pending", "loginGet.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onGet('/login').reply(200, authInfo);

      await store.dispatch(loginGet());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const loginGetActionFulfilled = emittedActions.at(1) as ReturnType<typeof changeFavorite.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        loginGet.pending.type,
        loginGet.fulfilled.type,
      ]);

      expect(loginGetActionFulfilled.payload)
        .toEqual(authInfo);
    });

    it('should dispatch "loginGet.pending", "loginGet.rejected" when server response 400', async () => {
      mockAxiosAdapter.onGet('/login').reply(400, null);

      await store.dispatch(loginGet());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginGet.pending.type,
        loginGet.rejected.type,
      ]);
    });
  });

  describe('loginPost', () => {
    it('should dispatch "loginPost.pending", "loginPost.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onPost('/login').reply(200, authInfo);

      await store.dispatch(loginPost({email:'a', password:'a0'}));

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);
      const loginGetActionFulfilled = emittedActions.at(1) as ReturnType<typeof changeFavorite.fulfilled>;

      expect(extractedActionsTypes).toEqual([
        loginPost.pending.type,
        loginPost.fulfilled.type,
      ]);

      expect(loginGetActionFulfilled.payload)
        .toEqual(authInfo);
    });

    it('should dispatch "loginPost.pending", "loginPost.rejected" when server response 400', async () => {
      mockAxiosAdapter.onPost('/login').reply(400, null);

      await store.dispatch(loginPost({email:'a', password:'a0'}));
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        loginPost.pending.type,
        loginPost.rejected.type,
      ]);
    });

    it('should call "setToken" once with the received token', async () => {
      mockAxiosAdapter.onPost('/login').reply(200, authInfo);
      const mockSaveToken = vi.spyOn(tokenStorage, 'setToken');

      await store.dispatch(loginPost({email:'a', password:'a0'}));

      expect(mockSaveToken).toBeCalledTimes(1);
      expect(mockSaveToken).toBeCalledWith(authInfo.token);
    });
  });

  describe('logout', () => {
    it('should dispatch "logout.pending", "logout.fulfilled", when server response 200', async () => {
      mockAxiosAdapter.onDelete('/logout').reply(200);

      await store.dispatch(logout());

      const emittedActions = store.getActions();
      const extractedActionsTypes = extractActionsTypes(emittedActions);

      expect(extractedActionsTypes).toEqual([
        logout.pending.type,
        logout.fulfilled.type,
      ]);
    });

    it('should dispatch "logout.pending", "logout.rejected" when server response 400', async () => {
      mockAxiosAdapter.onDelete('/logout').reply(400, null);

      await store.dispatch(logout());
      const actions = extractActionsTypes(store.getActions());

      expect(actions).toEqual([
        logout.pending.type,
        logout.rejected.type,
      ]);
    });

    it('should call "removeToken" once with the received token', async () => {
      mockAxiosAdapter.onDelete('/logout').reply(200);
      const mockSaveToken = vi.spyOn(tokenStorage, 'removeToken');

      await store.dispatch(logout());

      expect(mockSaveToken).toBeCalledTimes(1);
    });
  });
});
