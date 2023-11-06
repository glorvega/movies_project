import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DummyImgPipe } from './pipes/dummy.pipe';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [CardComponent, PaginationComponent, DummyImgPipe, SearchComponent],
  imports: [
    CommonModule, FormsModule
  ],
  exports: [CardComponent, PaginationComponent, DummyImgPipe, SearchComponent]
})
export class SharedModule { }
