import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from '../api.service';
import { Observable, forkJoin, map, switchMap } from 'rxjs';
import { MovieInterface, MovieInterfaceComplete } from './movie.interface';
import { ActorInterface } from '../actor/actor.interface';
import { CompanyInterface } from '../company/company.interface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})

export class MovieService {
  constructor(private apiService: ApiService, private router: Router) {
  }

  getMovies() {
    return this.apiService.getMovies();
  }

  getMovieComplete(movieId: number): Observable<MovieInterfaceComplete> {
    return this.apiService.getMovieById(movieId).pipe(
      switchMap((movie: MovieInterface) => {
        return this.apiService.getCompanies().pipe(
          map((companies: CompanyInterface[]) => {
            const relatedCompanies = companies.filter(company => company.movies.includes(movie.id));
            return relatedCompanies;
          }),
          switchMap((relatedCompanies: CompanyInterface[]) => {
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

  deleteMovie(movieDeleteId: number) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.apiService.deleteMovie(movieDeleteId).subscribe(() => {
          this.apiService.getCompanies().subscribe(companiesResponse => {
            //Busco las compañías que ya tenian mi peli en su listado
            const companiesWithOurMovie = companiesResponse.filter(company =>
              company.movies.includes(movieDeleteId)
            );
            //Recorre las compañias que ya tenian mi peli
            companiesWithOurMovie.forEach(company => {
              //Borra de esas compañias mi peli
              company.movies = company.movies.filter(id => id != movieDeleteId);
              //Actualiza la informacion de esas compañías sin mi peli
              this.apiService.editCompany(company).subscribe({
                next: () => {
                  Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                  });
                  this.router.navigate(['list']);
                  window.location.reload();
                }
              });
            })
          })
        });
      }
    });
  }

}