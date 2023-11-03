import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MovieService } from 'src/app/core/services/movie/movies.service';
import { MovieInterface } from 'src/app/core/services/movie/movie.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {
public movies!:Observable<MovieInterface[]>

  constructor(
    private router: Router,
    private service: MovieService) {
      this.movies = service.getMovies();
     }


  public goToDetail(movie: MovieInterface){
    console.log('hola');
    
    this.router.navigate(['list','detail', movie.id]);
  }

  


}

/*   ngOnInit(): void {
    this.getVideogames();
  }

  public getVideogames = () => {
    this.creationsService
      .getCreations()
      .subscribe((creations: VideogamesInterface[]) => {
        this.creations = creations;
      });
  };

  public editCreation = (game: VideogamesInterface) => {
    this.router.navigate(['create', game.id]);
  };

  public deleteCreation = (game: VideogamesInterface) => {
    this.creationsService.deleteCreation(game.id).subscribe({
      next: (id: any) => {
        this.getVideogames();
      },
      error: (error) => {
        console.log(error);
      },
    });
  };
}  */