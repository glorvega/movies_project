import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DummyImgPipe } from './pipes/dummy.pipe';



@NgModule({
  declarations: [CardComponent, PaginationComponent, DummyImgPipe],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, PaginationComponent, DummyImgPipe]
})
export class SharedModule { }
