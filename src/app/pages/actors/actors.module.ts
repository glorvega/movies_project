import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActorsComponent } from './actors.component';
import { ActorsRoutingModule } from './actors-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ActorsComponent],
  imports: [
    CommonModule, ActorsRoutingModule, SharedModule
  ],
  exports: [ActorsComponent]
})
export class ActorsModule { }
