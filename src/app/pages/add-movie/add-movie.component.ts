import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {
  registerForm = this.fb.group({
    title: ['', [Validators.required, Validators.minLength(3)]],
    cover: ['', [Validators.required]],
    genre: ['', [Validators.required]],
    actors: ['', [Validators.required]],
    studios: ['', [Validators.required]],
    year: ['', [Validators.required, Validators.min(1940), Validators.max(2023)]],
    duration: [0, [Validators.required, Validators.min(1), Validators.max(500)]],
    rating: [0, [Validators.required, Validators.min(1), Validators.max(10)]],
  })

  constructor(
    private router: Router,
    private fb: FormBuilder
  ) { }

  onSubmit() {
    console.log(this.registerForm.value);

    //this.router.navigate(['list'])
  }
}
