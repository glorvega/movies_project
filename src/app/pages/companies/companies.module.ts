import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompaniesComponent } from './companies.component';
import { CompaniesRoutingModule } from './companies-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [CompaniesComponent],
  imports: [
    CommonModule, CompaniesRoutingModule, SharedModule
  ],
  exports: [CompaniesComponent]
})
export class CompaniesModule { }
