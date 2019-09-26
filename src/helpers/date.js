import { TWO_HOURS_IN_MILLISECONDS } from '../constants/date';

export function isDataOutdate(lastUpdateTime) {
  const now = new Date().getTime();
  const dateDifference = now - lastUpdateTime;

  return TWO_HOURS_IN_MILLISECONDS < dateDifference;
}
