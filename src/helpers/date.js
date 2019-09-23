import { MILLS_IN_HOURS } from '../constants/date';

export function getDifferenceInHours(newDate, oldDate) {
  const dateDifferenceInMilliseconds = newDate - oldDate;
  const hours = dateDifferenceInMilliseconds / MILLS_IN_HOURS;

  return hours;
}
