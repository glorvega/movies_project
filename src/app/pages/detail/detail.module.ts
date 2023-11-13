import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { StarRatingModule } from 'angular-star-rating';



@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule, DetailRoutingModule, StarRatingModule, SharedModule
  ],
  exports: [DetailComponent]
})
export class DetailModule { }
