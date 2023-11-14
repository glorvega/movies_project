import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <span class="navbar-brand" (click)="goToHomepage()">
    <img
      src="../../../assets/images/logo.png"
      alt="app logo"
      width="50px"
      height="50px"
    />
    <p>Catflix</p>
  </span>
  <button
    class="navbar-toggler"
    type="button"
    data-toggle="collapse"
    data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent"
    aria-expanded="false"
    aria-label="Toggle navigation"
  >
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-items">
        <a class="nav-link" type="button" (click)="goToList()">Movies</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" type="button" (click)="goToCompanies()"
          >Companies</a
        >
      </li>
      <li class="nav-item">
        <a class="nav-link" type="button" (click)="goToActors()">Actors</a>
      </li>
    </ul>
  </div>
  <span>
    <a class="btn btn-outline-light" (click)="newMovie()">Add Movie</a>
  </span>
</nav>
  `,
  styles: [
    `
    .navbar {
  box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
  font-family: "Unica One", sans-serif;
  font-size: 30px;

  .navbar-brand {
    display: flex;
    flex-direction: row;
    align-items: center;
    cursor: pointer;
    font-size: 30px;
  }
}
    `,
  ],

})
export class NavbarComponent {

  constructor(
    private router: Router
  ) { }

  goToHomepage() {
    this.router.navigate(['home']);
  }

  goToList() {
    this.router.navigate(['list']);
  }

  goToActors() {
    this.router.navigate(['actors']);
  }

  goToCompanies() {
    this.router.navigate(['companies']);
  }

  newMovie() {
    this.router.navigate(['add-movie']);
  }

}

