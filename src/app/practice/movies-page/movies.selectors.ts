import { movies } from './../../../models/movies.model';
import { Movie } from './../../services/generic.service';
import { createSelector, createFeatureSelector } from '@ngrx/store';


export interface FeatureState {
  movies : Movie[],
};

export interface AppState {
  movies : FeatureState
};

export const selectFeature = (state : AppState) =>( state.movies)

export const selectMovies = createSelector(
  selectFeature,
  (state : FeatureState) => state.movies
)
