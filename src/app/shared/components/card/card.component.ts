import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

export interface DataCardInterface {
  id: number;
  poster?: string | null;
  title?: string;
  name?: string;
  country?: string;
  createYear?: number;
  employees?: number;
  rating?: number;
  genre?: string[];
  year?: number;
  first_name?: string;
  last_name?: string;
  gender?: string;
  bornCity?: string;
  birthdate?: string;
  img?: string;
  movies?: number[];
  nombre_completo?: string;

}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnChanges {

  dummyImg: string = '../../assets/images/dummy.jpeg';
  @Input() isMovie!: boolean;
  @Input() isCompany!: boolean;
  @Input() isActor!: boolean;
  @Input() item!: DataCardInterface;
  @Output() editElement: EventEmitter<void> = new EventEmitter<void>();
  @Output() goToDetail: EventEmitter<void> = new EventEmitter<void>();

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['item']) {
      console.log('ha habido cambios en', this.item);
    }
  }

  onEditElement() {
    this.editElement.emit();
  }

  navigateToDetail() {
    this.goToDetail.emit();
  }


}


