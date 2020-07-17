import { createReducer, on } from '@ngrx/store';
import {loadMovies, loadSuccess} from './movies.actions';
const initialMoviesState = {
  movies : [],
}

export const MoviesPageFeature = 'movies';
const _moviesReducer = createReducer(
  initialMoviesState,
  on(loadMovies, state => state),
  on(loadSuccess, (state, {movies}) => ({...state, movies: movies}))

);
export function moviesReducer(state, action){
  return _moviesReducer(state,action);
}
