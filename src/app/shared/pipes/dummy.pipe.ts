import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'dummyImg'})
export class DummyImgPipe implements PipeTransform {
    transform(imageUrl: string): string {
        const expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
        const regex = new RegExp(expression);
        const dummyImg = "../assets/images/dummy.jpeg";

        if(imageUrl?.match(regex)){
            return imageUrl
        } else {
            return dummyImg;
        }

        //return imageUrl || dummyImg;
    }
}

/* handleImgError(event: Event): void {
    const dummyImg = "../../assets/images/dummy.jpeg";
    if(event.target instanceof HTMLImageElement) {
      event.target.src = dummyImg;
    }
  } */