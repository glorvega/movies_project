import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddMovieComponent } from './add-movie.component';
import { AddMovieRoutingModule } from './add-movie-routing.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AddMovieComponent],
  imports: [
    CommonModule, AddMovieRoutingModule, ReactiveFormsModule
  ],
  exports: [AddMovieComponent]
})
export class AddMovieModule { }
