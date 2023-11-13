import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './components/card/card.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { DummyImgPipe } from './pipes/dummy.pipe';
import { SearchComponent } from './components/search/search.component';
import { FormsModule } from '@angular/forms';
import { DurationPipe } from './pipes/duration.pipe';
import { StarRatingModule } from 'angular-star-rating';



@NgModule({
  declarations: [CardComponent, PaginationComponent, DummyImgPipe, DurationPipe, SearchComponent],
  imports: [
    CommonModule, FormsModule, StarRatingModule,
  ],
  exports: [CardComponent, PaginationComponent, DummyImgPipe, DurationPipe, SearchComponent]
})
export class SharedModule { }
