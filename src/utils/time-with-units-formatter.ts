import { Time } from './time';
import { TimeFormatter } from './time-formatter.interface';

export class TimeWithUnitsFormatter implements TimeFormatter {
  public format(time: Time): string {
    let timeFormatted = '';

    if (time.hours > 0) {
      timeFormatted = timeFormatted.concat(`${this.normalize(time.hours)} hr `);
    }

    if (time.minutes > 0) {
      timeFormatted = timeFormatted.concat(
        `${this.normalize(time.minutes)} min `
      );
    }

    if (time.seconds > 0) {
      timeFormatted = timeFormatted.concat(
        `${this.normalize(time.seconds)} sec`
      );
    }

    return timeFormatted;
  }

  private normalize(number: number): string {
    return number.toString().padStart(2, '0');
  }
}
