import {Film} from '../mocks/films';
import {useParams} from 'react-router-dom';

export const useFilms = (films : Film[]) => {
  const {id} = useParams();
  const film = films.find((f) => f.id === id) ?? films[0];
  return film;
};
