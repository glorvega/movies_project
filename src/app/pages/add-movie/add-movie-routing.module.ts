import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AddMovieComponent } from './add-movie.component';



const routes: Routes = [
    { path: '', component: AddMovieComponent },
  
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AddMovieRoutingModule {}
