import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'duration' })
export class DurationPipe implements PipeTransform {
    transform(minutes: number): string {
        const hours = Math.floor(minutes / 60);
        const remainingMinutes = minutes % 60;

        const hoursString = hours > 0 ? `${hours} ${hours === 1 ? 'hour' : 'hours'}` : '';
        const minutesString = remainingMinutes > 0 ? `${remainingMinutes} ${remainingMinutes === 1 ? 'minute' : 'minutes'}` : '';

        if (hoursString && minutesString) {
            return `${hoursString} and ${minutesString}`;
        } else {
            return hoursString || minutesString || '0 minutes';
        }
    }
}