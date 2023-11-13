import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterModule } from './core/footer/footer.module';
import { NavbarModule } from './core/navbar/navbar.module';
import { DetailModule } from './pages/detail/detail.module';
import { HomeModule } from './pages/home/home.module';
import { ListModule } from './pages/list/list.module';
import { SharedModule } from './shared/shared.module';
import { ActorsModule } from './pages/actors/actors.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AddMovieModule } from './pages/add-movie/add-movie.module';
import { CompaniesModule } from './pages/companies/companies.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { SpinnerService } from './core/services/spinner/spinner.service';
import { SpinnerModule } from './core/spinner/spinner.module';
import { SpinnerInterceptor } from './core/interceptor/spinner.interceptor';
import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ProgressSpinnerModule,
    StarRatingModule.forRoot(),
    HttpClientModule,
    AppRoutingModule,
    FooterModule,
    NavbarModule,
    DetailModule,
    ListModule,
    HomeModule,
    ActorsModule,
    CompaniesModule,
    AddMovieModule,
    SpinnerModule,
    SharedModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: SpinnerInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
