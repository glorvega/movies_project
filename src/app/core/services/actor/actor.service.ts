import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { ActorInterface, ActorInterfaceComplete } from './actor.interface';
import { MovieInterface, MovieInterfaceComplete } from '../movie/movie.interface';

@Injectable({
    providedIn: 'root'
})
export class ActorService {
    constructor(
        private http: HttpClient,
        private apiService: ApiService
    ) { }

    getActors() {
        return this.apiService.getActors()
    }

    getActorComplete(actorId: number): Observable<ActorInterfaceComplete> {
        return this.apiService.getActorById(actorId).pipe(
            switchMap((actor: ActorInterface) => {
                // Obtener detalles de las películas en las que el actor ha participado
                const moviesObservables: Observable<MovieInterface>[] = actor.movies.map(movieId => this.apiService.getMovieById(movieId));

                return forkJoin(moviesObservables).pipe(
                    map((movies: MovieInterface[]) => {
                        return {
                            ...actor,
                            movies: movies
                        };
                    })
                );
            })
        );
    }
}
