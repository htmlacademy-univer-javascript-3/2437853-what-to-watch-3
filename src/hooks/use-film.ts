import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from './use-app-selector';
import {fetchFilm} from '../store/api-action';
import {useEffect} from 'react';
import {selectFilm} from '../store/film/film-store.selectors';

export const useFilm = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
    }
  }, [dispatch, id]);
  const film = useAppSelector(selectFilm);
  return {film, id};
};
