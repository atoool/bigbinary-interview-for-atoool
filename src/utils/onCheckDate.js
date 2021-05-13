import moment from 'moment';

export function onCheckDate(lastDate) {
  return lastDate && moment().isSame(moment(lastDate), 'day');
}
