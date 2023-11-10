import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { MovieInterface, MovieInterfaceComplete } from './movie.interface';
import { ActorInterface } from '../actor/actor.interface';
import { CompanyInterface } from '../company/company.interface';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private apiService: ApiService) {
  }

  getMovies() {
    return this.apiService.getMovies();
  }

  getMovieComplete(movieId: number): Observable<MovieInterfaceComplete> {
    return this.apiService.getMovieById(movieId).pipe(
      switchMap((movie: MovieInterface) => {
        //obtener todas las compañías
        return this.apiService.getCompanies().pipe(
          map((companies: CompanyInterface[]) => {
            //filtrar las compañías que tienen la película en su listado
            const relatedCompanies = companies.filter(company => company.movies.includes(movie.id));
            return relatedCompanies;
          }),
          switchMap((relatedCompanies: CompanyInterface[]) => {
            //obtener detalles de actores para la película
            const actorsObservables: Observable<ActorInterface>[] = movie.actors.map(actorId => this.apiService.getActorById(actorId));
            return forkJoin(actorsObservables).pipe(
              map((actors: ActorInterface[]) => {
                return {
                  ...movie,
                  actors: actors,
                  companies: relatedCompanies
                };

              },
                console.log(movie.imdbRating)
              )
            );
          })
        );
      })
    );
  }

  getGenres(): Observable<string[]> {
    return this.getMovies().pipe(map(movies => Array.from(new Set(movies.flatMap(movie => movie.genre)))));
  }


}