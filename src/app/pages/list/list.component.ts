import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie/movies.service'
import { Observable, map } from 'rxjs';
import { DataCardInterface } from 'src/app/shared/components/card/card.component';
import { ApiService } from 'src/app/core/services/api.service';
import Swal from 'sweetalert2';
import { MovieInterface } from 'src/app/core/services/movie/movie.interface';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
  //public movies$!: Observable<MovieInterface[]>
  searchMovie: string = '';
  filteredMovies$!: Observable<DataCardInterface[]>
  wrongMovie!: boolean;

  constructor(
    private router: Router,
    private service: MovieService
  ) {

  }

  ngOnInit() {
    /* this.movies$ = this.service.getMovies(); */
    this.filterMovies();
  }

  public goToDetail(movieId: number) {
    this.router.navigate(['list', 'detail', movieId]);
  }

  editMovie(movieId: number) {
    this.router.navigate(['edit', movieId])
  }

  deleteMovie(id: number) {
    this.service.deleteMovie(id);
  }

  onSearchMovie(searchMovie: string) {
    this.searchMovie = searchMovie;
    this.filterMovies()

  }

  filterMovies() {
    if (this.searchMovie === '' || this.searchMovie.length < 3) {
      this.filteredMovies$ = this.service.getMovies().pipe(
        map((movies) => {
          return movies.map(movie => ({
            title: movie.title,
            genre: movie.genre,
            poster: movie.poster,
            id: movie.id,
          }))
        })
      )
      this.wrongMovie = false;
    } else {
      this.filteredMovies$ = this.service.getMovies().pipe(
        map((movies) => {
          return movies
            .filter((movie) =>
              movie.title.toLowerCase().startsWith(this.searchMovie.toLowerCase())
            )
            .map((movie) => ({
              title: movie.title,
              genre: movie.genre,
              poster: movie.poster,
              id: movie.id
            }));
        })
      );
      this.wrongMovie = false;
      this.filteredMovies$.subscribe(movie => {
        this.wrongMovie = movie.length === 0;
      })
    }
  }
}