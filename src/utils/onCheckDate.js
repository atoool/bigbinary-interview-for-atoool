import moment from 'moment';

export function onCheckDate(currentData, allData) {
  const length = allData?.length;
  const lastItem = allData[0];
  if (
    length !== 0 &&
    moment(currentData?.date).endOf() === moment(lastItem?.date).endOf()
  ) {
    return true;
  }
  return false;
}
