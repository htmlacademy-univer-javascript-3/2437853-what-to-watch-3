import {describe, expect, vi} from 'vitest';
import {renderHook} from '@testing-library/react';
import {useFilm} from './use-film';
import {Params} from 'react-router-dom';
import {film} from '../mocks/films';

describe('Hook: useFilm', () => {
  vi.mock('react-router-dom', () => ({
    useParams: (): Readonly<Params> => ({id: '0'}),
  }));
  vi.mock('./use-app-selector', () => ({
    useAppSelector: () => film,
    useAppDispatch: () => vi.fn()
  }));

  it('should return film and id', () => {
    const {result} = renderHook(() => useFilm());
    expect(result.current.film).toBe(film);
    expect(result.current.id).toBe('0');
  });
});
