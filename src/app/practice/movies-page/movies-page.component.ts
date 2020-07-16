import { Observable } from 'rxjs';
import { GenericService, Movie } from './../../services/generic.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.scss']
})
export class MoviesPageComponent implements OnInit {
  movies:Observable<any>;

  constructor(private service : GenericService) { }

  ngOnInit(): void {
    this.movies = this.service.getAllMovies();
      // .subscribe(a => {
      //   this.movies = a
      // });
  }

}
