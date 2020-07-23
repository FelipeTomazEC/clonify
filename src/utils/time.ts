export class Time {
  hours: number;
  minutes: number;
  seconds: number;

  constructor(hours: number, minutes: number, seconds: number) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  public static parseMillisecondsToTime(milliseconds: number): Time {
    const timeInSeconds = Math.round(milliseconds / 1000);
    const hours = Math.floor(timeInSeconds / 3600);
    const minutes = Math.floor((timeInSeconds % 3600) / 60);
    const seconds = timeInSeconds - minutes * 60 - hours * 3600;

    return new Time(hours, minutes, seconds);
  }
}
