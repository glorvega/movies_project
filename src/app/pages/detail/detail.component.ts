import { Observable } from 'rxjs';
import { MovieInterfaceComplete } from './../../core/services/movie/movie.interface';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  movieId: number = this.route.snapshot.params['movieId'];
  movie$!: Observable<MovieInterfaceComplete>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) {
    if (this.movieId) {
      this.movie$ = this.movieService.getMovieComplete(this.movieId);
      console.log(this.movie$, 'peli detail');
    }
  }

  deleteMovie(): void {
    this.movieService.deleteMovie(Number(this.movieId));
  }
}
