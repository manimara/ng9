import { movies } from './../../../models/movies.model';
import { Observable, Subscription } from 'rxjs';
import { GenericService, Movie } from './../../services/generic.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store, select } from '@ngrx/store';
// import { MoviesEffects} from './movies.effects';
import { loadMovies } from './movies.actions';
import { selectMovies } from './movies.selectors'

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit, OnDestroy {
  movies$: Subscription;
  a: any;
  // movies$: Observable<Movie[]>;
  movies: Movie[];
  value1$: Observable<any> = this.store.select(state => state.movies);
  constructor(private store: Store<{ movies: Movie[] }>) {
    //  this.movies$ = store.pipe(select(selectMoviesFeature));
  }
  ngOnDestroy(): void {
    // throw new Error("Method not implemented.");
    this.movies$.unsubscribe();
  }

  ngOnInit(): void {
    // this.store.pipe(select('movies'))
    // this.store.dispatch({ type: '[Movies Page] Load Movies' });
    this.store.dispatch(loadMovies());
    this.loadMovies();
  }

  loadMovies() {
    //  this.movies$ = this.store.pipe(select('movies'));
    this.movies$ = this.store.pipe(select('movies')).subscribe(a => {
      this.movies = a['movies'];
    });
    //  this.movies$ = this.store.pipe(select(selectMovies));
  }

}
