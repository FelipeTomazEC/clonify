import { Time } from './time';

export interface TimeFormatter {
  format(time: Time): string;
}
