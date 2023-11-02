import { AddMovieModule } from './pages/add-movie/add-movie.module';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list/list.module').then((m) => m.ListModule)
  },
  {
    path: 'list/detail/:movieId',
    loadChildren: () => import('./pages/detail/detail.module').then((m) => m.DetailModule)
  },
  {
    path: 'actors',
    loadChildren: () => import('./pages/actors/actors.module').then((m) => m.ActorsModule)
  },
  {
    path: 'add-movie',
    loadChildren: () => import('./pages/add-movie/add-movie.module').then((m) => m.AddMovieModule)
  },
  {
    path: 'companies',
    loadChildren: () => import('./pages/companies/companies.module').then((m) => m.CompaniesModule)
  },
  {
    path: '**', redirectTo: 'home', pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
