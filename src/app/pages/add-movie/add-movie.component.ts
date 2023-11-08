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
    title: ['', Validators.required],
    cover: ['', Validators.required],
    genre: ['', Validators.required],
    actors: ['', Validators.required],
    studios: ['', Validators.required],
    year: ['', Validators.required],
    duration: [0, Validators.required],
    rating: [0, Validators.required],
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
