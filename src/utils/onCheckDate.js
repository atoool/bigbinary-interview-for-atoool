import moment from 'moment';

export function onCheckDate(currentData, allData) {
  const length = allData?.length;
  const lastItem = allData[0];
  if (
    length !== 0 &&
    moment(currentData?.date).format('DD/MM/YY') ===
      moment(lastItem?.date).format('DD/MM/YY')
  ) {
    return true;
  }
  return false;
}
