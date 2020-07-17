import { Injectable } from '@angular/core';
import { movies } from '../../models/movies.model';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class GenericService {
  MOVIES_URL : string = 'https://my-json-server.typicode.com/manimara/ng9/movies';
  constructor(private _http: HttpClient) { }

  getAllMovies(){
    return this._http.get<Movie[]>(this.MOVIES_URL);
  }
}

export interface Movie {
  name:string,
  year:number;
  rating:number;
}
