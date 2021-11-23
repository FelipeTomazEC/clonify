import { Time } from "./time";
import { TimeFormatter } from "./time-formatter.interface";

export class TimeWithoutUnitsFormatter implements TimeFormatter {
  format(time: Time): string {
    let formatted = '';

    if(time.hours > 0) {
      formatted = formatted
        .concat(this.normalize(time.hours))
        .concat(':');
    }

    return formatted
      .concat(this.normalize(time.minutes))
      .concat(':')
      .concat(this.normalize(time.seconds));
  }

  private normalize(number: number): string {
    return number.toString().padStart(2, '0');
  }
}