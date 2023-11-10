import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MovieInterface, MovieInterfaceComplete } from 'src/app/core/services/movie/movie.interface';
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

  // MOVIE API CALLS

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

  postMovie(movie: MovieInterfaceComplete): Observable<MovieInterfaceComplete> {
    return this.http.post<MovieInterfaceComplete>(
      'http://localhost:3000/movies',
      movie,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  editMovie(movie: MovieInterfaceComplete): Observable<MovieInterfaceComplete> {
    console.log(movie);

    return this.http.put<MovieInterfaceComplete>(
      `http://localhost:3000/movies/${movie.id}`,
      movie,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
  }

  deleteMovie(id: number): Observable<DataCardInterface> {
    return this.http.delete<DataCardInterface>(
      `http://localhost:3000/movies/${id}`
    );
  }

  // ACTORS API CALLS

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

  //COMPANIES API CALLS

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


}