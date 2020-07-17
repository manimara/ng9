import { GenericService } from './../../services/generic.service';
import { map, mergeMap, catchError, toArray } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY, of } from 'rxjs';
import { MoviesActionTypes, loadSuccess } from './movies.actions';


@Injectable()
export class MoviesEffects {

  loadMovies = createEffect(() => this.actions$
    .pipe(
      ofType(MoviesActionTypes.LOADMOVIES),
      mergeMap(
        () => this.service.getAllMovies()
          .pipe(
            map(
              movies => (loadSuccess({ movies })),
              e => of(MoviesActionTypes.LOADERROR)
            )
          )
      )));
  constructor(
    private actions$: Actions,
    private service: GenericService
  ) { }
}
