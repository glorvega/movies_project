import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  
  constructor(
    private router: Router
  ) {}
  ngOnInit(): void { }

  goToHomepage(){
    this.router.navigate(['home']);
  }

  goToList(){
    this.router.navigate(['list']);
  }

  goToActors(){
    this.router.navigate(['actors']);
  }

  goToCompanies(){
    this.router.navigate(['companies']);
  }

  newMovie(){
    this.router.navigate(['add-movie']);
  }

}

