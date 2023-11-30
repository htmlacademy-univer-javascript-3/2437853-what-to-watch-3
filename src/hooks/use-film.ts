import {useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from './use-app-selector';
import {fetchFilm} from '../store/api-action';
import {useEffect} from 'react';

export const useFilm = () => {
  const {id} = useParams();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (id) {
      dispatch(fetchFilm(id));
    }
  }, [dispatch, id]);
  const film = useAppSelector((state) => state.currentFilm);
  return {film, id};
};
