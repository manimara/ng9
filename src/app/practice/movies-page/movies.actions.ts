import { Movie } from './../../services/generic.service';
import { createAction, Action, props } from '@ngrx/store';

export enum MoviesActionTypes {
  LOADMOVIES = '[Movies Effect] Load Movies',
  LOADSUCCES = '[Movies Effect] Movies Loaded Success',
  LOADERROR = '[Movies Effect] Movies Not Loaded',
}

export const loadMovies = createAction(
  MoviesActionTypes.LOADMOVIES,
);

export const loadError = createAction(
  MoviesActionTypes.LOADERROR,
);


export const loadSuccess = createAction(
  MoviesActionTypes.LOADSUCCES,
  props<{ movies: Movie[] }>()
);
