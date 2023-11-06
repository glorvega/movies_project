import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie/movies.service';
import { MovieInterface } from 'src/app/core/services/movie/movie.interface';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
public movies$!:Observable<MovieInterface[]>
searchMovie: string = '';
filteredMovies$!:Observable<MovieInterface[]>
wrongMovie!: boolean;

  constructor(
    private router: Router,
    private service: MovieService) {
      
     }
  
  ngOnInit(){
    this.movies$ = this.service.getMovies();
    this.filterMovies();
  }

  public goToDetail(movie: MovieInterface){
    this.router.navigate(['list','detail', movie.id]);
  }

  onSearchMovie(searchMovie: string){
    this.searchMovie = searchMovie;
    this.filterMovies();
  }

  filterMovies(){
    if(this.searchMovie === '' || this.searchMovie.length < 3) {
      this.filteredMovies$ = this.movies$
      this.wrongMovie = false;
    } else {
      this.filteredMovies$ = this.movies$.pipe(
        map((movies) => 
        movies.filter((movie)=>
        movie.title.toLowerCase().startsWith(this.searchMovie.toLowerCase())
        )
      )
    );
    this.wrongMovie = false;
    this.filteredMovies$.subscribe(movie => {
      this.wrongMovie = movie.length === 0;
    })
    }
  }
}