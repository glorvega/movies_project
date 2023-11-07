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
  movieId: string | null = '';
  movie$!: Observable<MovieInterfaceComplete>;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private router: Router
  ){
    this.movieId = this.route.snapshot.paramMap.get('movieId');
    if(this.movieId){
      this.movie$ = this.movieService.getMovieComplete(Number(this.movieId));
    }
  }

  deleteMovie(){
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
        this.router.navigate(['list']);
      }
    });
  }
}
