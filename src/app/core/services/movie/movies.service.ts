import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieInterface } from 'src/app/core/services/movie/movie.interface';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
})

export class MovieService {
    constructor(private http: HttpClient){
    }

      getMovies(): Observable<MovieInterface[]> {
        return this.http.get<MovieInterface[]>(
          'http://localhost:3000/movies'
        );
      }

      /* getMovie(): Observable<MovieInterface> {
        return this.http.get<MovieInterface>(
          `http://localhost:3000/movies/${id}`
        );
      }

      deleteMovie(): Observable<MovieInterface> {
        return this.http.delete<MovieInterface>(
          `http://localhost:3000/movies/${id}`
        );
      } */

      /* editMovie(movie: MovieInterface): Observable<MovieInterface> {
        return this.http.put<MovieInterface>(
          `http://localhost:3000/movies/${movie.id}`,
          movie,
          {
            headers: {
              'Content-Type: 'application/json',
            }
          }
        )s
      } */
      
}