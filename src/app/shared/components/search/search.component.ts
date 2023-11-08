import { Component, EventEmitter, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { Subject, Subscription, debounceTime } from 'rxjs';
import { MovieInterface } from 'src/app/core/services/movie/movie.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnDestroy {
  inputSearch: string = '';
  searchSubject = new Subject<string>();
  private subscription: Subscription;
  @Output() searchMovie: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
    this.subscription = this.searchSubject.pipe(debounceTime(2000)).subscribe((value) => {
      this.searchMovie.emit(value);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onSearchMovie() {
    this.searchSubject.next(this.inputSearch);
  }

  /* onSearchMovie(){
    this.searchMovie.emit(this.inputSearch)
  } */



}
