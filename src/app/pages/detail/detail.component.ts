import { Observable } from 'rxjs';
import { MovieInterfaceComplete } from './../../core/services/movie/movie.interface';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieInterface } from 'src/app/core/services/movie/movie.interface';
import { MovieService } from 'src/app/core/services/movie/movies.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  movieId: string | null = '';
  movie$!: Observable<MovieInterfaceComplete>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ){
    this.movieId = this.route.snapshot.paramMap.get('movieId');
    if(this.movieId){
      this.movie$ = this.movieService.getMovieComplete(Number(this.movieId));
    }
    
  }



}
