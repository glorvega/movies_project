import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'duration'})
export class DurationPipe implements PipeTransform {
    transform(value: number): any {
        const hours = Math.floor(value/60);
        const minutes = Math.floor(value/60);
        return hours + " hours" + " & " + minutes + " minutes";
    }
}