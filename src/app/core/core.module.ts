import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';
import { AppRoutingModule } from '../app-routing.module';
import { SpinnerModule } from './spinner/spinner.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    SpinnerModule,
    AppRoutingModule,
    
  ]
})
export class CoreModule { }
