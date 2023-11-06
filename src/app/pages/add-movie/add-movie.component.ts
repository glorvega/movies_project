import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.scss']
})
export class AddMovieComponent {

  constructor(
    private router: Router
  ){}

  onSubmit(){
    this.router.navigate(['list'])
  }
}
