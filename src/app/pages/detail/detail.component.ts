import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieInterface } from 'src/app/core/services/movie/movie.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent {
  movieId: string | null = '';
  movieDetails!: MovieInterface;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ){
    this.movieId = this.route.snapshot.paramMap.get('movieId');
    console.log(this.movieId);
    
  }

}
