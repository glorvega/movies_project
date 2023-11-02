import { Component, Input } from '@angular/core';
import { CompanyInterface } from 'src/app/core/services/company/company.interface';
import { MovieInterface } from 'src/app/core/services/movie/movie.interface';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
@Input() movie!: MovieInterface;
@Input() company!: CompanyInterface;
//@Input() dummyImg: string = "https://media.istockphoto.com/id/1265221960/es/vector/p%C3%A1gina-no-encontrada-error-con-dise%C3%B1o-de-solapa-de-pel%C3%ADcula.jpg?s=1024x1024&w=is&k=20&c=ZhpFrAYtshGib5hFEJyT6kYVxDvXM2J6lqDIl07ca94="

handleImgError(event: Event): void {
  const dummyImg = "../../assets/images/dummy.jpeg";
  if(event.target instanceof HTMLImageElement) {
    event.target.src = dummyImg;
  }
}

}


