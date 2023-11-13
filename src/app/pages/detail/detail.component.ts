import { Observable } from 'rxjs';
import { MovieInterfaceComplete } from './../../core/services/movie/movie.interface';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieInterface } from 'src/app/core/services/movie/movie.interface';
import { MovieService } from 'src/app/core/services/movie/movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  //movieId: string | null = '';
  movieId: number = this.route.snapshot.params['movieId'];
  movie$!: Observable<MovieInterfaceComplete>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
  ) {
    //this.movieId = this.route.snapshot.paramMap.get('movieId');
    if (this.movieId) {
      this.movie$ = this.movieService.getMovieComplete(this.movieId);
      console.log(this.movie$, 'peli detail');
    }
  }

  deleteMovie() {
    this.movieService.deleteMovie(Number(this.movieId));
  }
}
