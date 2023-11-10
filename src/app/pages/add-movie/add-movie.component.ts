import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ActorInterface } from 'src/app/core/services/actor/actor.interface';
import { ApiService } from 'src/app/core/services/api.service';
import { CompanyInterface } from 'src/app/core/services/company/company.interface';
import { MovieInterface, MovieInterfaceComplete } from 'src/app/core/services/movie/movie.interface';
import { MovieService } from 'src/app/core/services/movie/movies.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent implements OnInit {
  movieId: number = this.route.snapshot.params['movieId'];
  isEdit: boolean = false;
  genres: string[] = [];
  actors: ActorInterface[] = [];
  companies: CompanyInterface[] = [];

  registerForm: FormGroup = this.fb.group({
    id: [this.movieId],
    title: ['', [Validators.required, Validators.minLength(3), Validators.pattern('.*PELÍCULA AÑADIDA$')]],
    poster: ['', [Validators.required]],
    genre: [[], [Validators.required]],
    actors: [[], [Validators.required]],
    companies: [[], [Validators.required]],
    year: ['', [Validators.required, Validators.min(1940), Validators.max(2023)]],
    duration: [0, [Validators.required, Validators.min(1), Validators.max(500)]],
    imdbRating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
  })
  get genresFormArray() {
    return this.registerForm.get('genre') as FormArray
  }

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MovieService,
    private apiService: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    if (this.movieId) {
      this.isEdit = true;
      this.service.getMovieComplete(this.movieId).subscribe((movie) => {
        this.registerForm.patchValue(movie);
        console.log(this.registerForm.value);
      })
    }
    this.service.getGenres().subscribe(genres => this.genres = genres);
    this.apiService.getActors().subscribe(actors => this.actors = actors);
    this.apiService.getCompanies().subscribe(companies => this.companies = companies);
  }

  /* marcarComoSeleccionada(opcion: string) {
    return this.genresFormArray.value.includes(opcion);
  } */

  editMovie(movie: MovieInterfaceComplete) {
    this.apiService.editMovie(movie).subscribe({
      next: (movie) => {
        Swal.fire({
          icon: 'success',
          title: 'Movie updated!',
          showConfirmButton: false,
          timer: 1500,
        });
        //this.router.navigate(['detail', this.movieId]);
      },
      error: (error) => console.error('Error en get routes: ', error),
    });
  }

  addMovie(movie: MovieInterfaceComplete) {
    console.log("addmovieeee");

    this.apiService.postMovie(movie).subscribe({
      next: (movie) => {
        Swal.fire({
          icon: 'success',
          title: `${movie.title} has been added to your collection!`,
          showConfirmButton: false,
          timer: 1500,
        });
        this.router.navigate(['list']);
      },
      error: (error) => console.log('Error', error),

    })
  }


  onSubmit() {
    console.log(this.registerForm.value);

    if (this.isEdit) {
      this.editMovie(this.registerForm.value)
    } else {
      this.addMovie(this.registerForm.value);
    }

  }
}
