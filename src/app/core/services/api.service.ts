import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieInterface } from 'src/app/core/services/movie/movie.interface';
import { Observable } from 'rxjs';
import { ActorInterface } from './actor/actor.interface';
import { CompanyInterface } from './company/company.interface';
import { DataCardInterface } from 'src/app/shared/components/card/card.component';


@Injectable({
  providedIn: 'root'
})

export class ApiService {
  constructor(private http: HttpClient) {
  }

  getMovies(): Observable<MovieInterface[]> {
    return this.http.get<MovieInterface[]>(
      'http://localhost:3000/movies'
    );
  }

  getMovieById(id: number): Observable<MovieInterface> {
    return this.http.get<MovieInterface>(
      `http://localhost:3000/movies/${id}`
    )
  }

  deleteMovie(id: number): Observable<DataCardInterface> {
    return this.http.delete<DataCardInterface>(
      `http://localhost:3000/movies/${id}`
    );
    console.log('llamo a delete api');
  }

  getActors(): Observable<ActorInterface[]> {
    return this.http.get<ActorInterface[]>(
      'http://localhost:3000/actors'
    )
  }

  getActorById(id: number): Observable<ActorInterface> {
    return this.http.get<ActorInterface>(
      `http://localhost:3000/actors/${id}`
    )
  }

  getCompanies(): Observable<CompanyInterface[]> {
    return this.http.get<CompanyInterface[]>(
      'http://localhost:3000/companies'
    )
  }

  getCompanyById(id: number): Observable<CompanyInterface> {
    return this.http.get<CompanyInterface>(
      `http://localhost:3000/companies/${id}`
    )
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