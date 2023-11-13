import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { ActorInterfaceComplete } from './actor.interface';
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

    getActorsWithMovies(): Observable<ActorInterfaceComplete[]> {
        return forkJoin({
            actors: this.apiService.getActors(),
            movies: this.apiService.getMovies()
        }).pipe(
            map(({ actors, movies }) => {
                return actors.map(actor => {
                    const moviesForActor = actor.movies.map(movieId =>
                        movies.find(movie => movie.id === movieId)
                    );
                    const actorWithMovies: ActorInterfaceComplete = {
                        ...actor,
                        movies: moviesForActor as MovieInterface[]
                    };
                    return actorWithMovies;
                })
            }
            )
        )
    }
}
