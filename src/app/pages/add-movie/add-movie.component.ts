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
    companies: ['', [Validators.required]],
    year: ['', [Validators.required, Validators.min(1940), Validators.max(2023)]],
    duration: [0, [Validators.required, Validators.min(1), Validators.max(500)]],
    imdbRating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
  })


  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private service: MovieService,
    private apiService: ApiService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.service.getGenres().subscribe(genres => this.genres = genres);
    this.apiService.getActors().subscribe(actors => this.actors = actors);
    this.apiService.getCompanies().subscribe(companies => {
      this.companies = companies
      if (this.movieId) {
        const companyWithMovie = this.companies.filter(comp => comp.movies.includes(Number(this.movieId))).map(comp => comp.id);
        this.registerForm.get('companies')?.setValue(companyWithMovie);
      }
    });
    if (this.movieId) {
      this.isEdit = true;
      this.apiService.getMovieById(this.movieId).subscribe((movie) => {
        this.registerForm.patchValue(movie);

        console.log(this.registerForm.value);
      })
    }
  }



  editMovie(movie: MovieInterface) {
    this.apiService.editMovie(movie).subscribe({
      next: (movie) => {
        this.updateCompanies(this.registerForm.controls['companies'].value, movie.id);
        Swal.fire({
          icon: 'success',
          title: 'Movie updated!',
          showConfirmButton: false,
          timer: 1500,
        });
      },
      error: (error) => console.error('Error en get routes: ', error),
    });
  }

  addMovie(movie: MovieInterface) {

    this.apiService.postMovie(movie).subscribe({
      next: (movie) => {
        console.log(movie);
        this.updateCompanies(this.registerForm.controls['companies'].value, movie.id);

        Swal.fire({
          icon: 'success',
          title: `${movie.title} has been added to your collection!`,
          showConfirmButton: false,
          timer: 1500,
        });
      },
      error: (error) => console.log('Error', error),

    })
  }

  updateCompanies(selectedCompanyIds: number[], movieId: number) {
    //Busco las compañías que ya tenian mi peli en su listado
    const companiesWithOurMovie = this.companies.filter(company =>
      company.movies.includes(movieId)
    );
    //Recorre las compañias que ya tenian mi peli
    companiesWithOurMovie.forEach(company => {
      //Borra de esas compañias mi peli
      company.movies = company.movies.filter(id => id != movieId);
      //Actualiza la informacion de esas compañías sin mi peli
      this.apiService.editCompany(company).subscribe();
    })
    //Recorremos las compañias que he seleccionado en mi formulario
    selectedCompanyIds.forEach(companyId => {
      //Con esto buscamos las compañias que hemos seleccionado en nuestro catalogo de compañias
      const existingCompany = this.companies.find(c => c.id === companyId);
      //Si existe la compañía que hemos seleccionado, le añadimos nuestra peli
      if (existingCompany) {
        //Le metemos nuestra peli en su array de pelis
        existingCompany.movies.push(movieId);
        //Y por último, actualizamos los datos de esa compañía con nuestra peli ya incluida en su listado
        this.apiService.editCompany(existingCompany).subscribe({
          next: (company) =>
            //Y cuando ya está actaulizado, volvemos al listado de pelis
            this.router.navigate(['list'])
        });
      }
    });
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
