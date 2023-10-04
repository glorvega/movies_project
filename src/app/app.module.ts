import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InterfacesComponent } from './interfaces/interfaces.component';
import { FooterModule } from './core/footer/footer.module';
import { NavbarModule } from './core/navbar/navbar.module';
import { DetailModule } from './pages/detail/detail.module';
import { HomeModule } from './pages/home/home.module';
import { ListModule } from './pages/list/list.module';

@NgModule({
  declarations: [
    AppComponent,
    InterfacesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FooterModule,
    NavbarModule,
    DetailModule,
    ListModule,
    HomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
