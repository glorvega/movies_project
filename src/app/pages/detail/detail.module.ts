import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { DetailRoutingModule } from './detail-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [DetailComponent],
  imports: [
    CommonModule, DetailRoutingModule, SharedModule
  ],
  exports: [DetailComponent]
})
export class DetailModule { }
