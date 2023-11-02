import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list.component';
import { ListRoutingModule } from './list-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule, ListRoutingModule, SharedModule
  ],
  exports: [ListComponent]
})
export class ListModule { }
