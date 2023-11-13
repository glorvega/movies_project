import { Component } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ActorInterface } from 'src/app/core/services/actor/actor.interface';
import { ActorService } from 'src/app/core/services/actor/actor.service';
import { DataCardInterface } from 'src/app/shared/components/card/card.component';

@Component({
  selector: 'app-actors',
  templateUrl: './actors.component.html',
  styleUrls: ['./actors.component.scss']
})
export class ActorsComponent {
  actors$!: Observable<DataCardInterface[]>

  constructor(private service: ActorService) { }

  ngOnInit(): void {
    this.getActors();

  }

  getActors() {
    this.actors$ = this.service.getActorsWithMovies().pipe(
      map((actors) => {
        return actors.map((actor) => ({
          id: actor.id,
          first_name: actor.first_name,
          last_name: actor.last_name,
          gender: actor.gender,
          birthdate: actor.birthdate,
          img: actor.img,
          movies: actor.movies
        }))
      })
    )
  }


}
