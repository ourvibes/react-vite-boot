import numeral from 'numeral';

import {
  MONEY_FORMAT,
  INTEGER_FORMAT,
  PERCENTAGE_FORMAT
} from '@constants';

const formatNum = (
  num: string | number,
  format: string = INTEGER_FORMAT,
) => {
  return numeral(num).format(format);
};

export default formatNum;

export {
  MONEY_FORMAT,
  INTEGER_FORMAT,
  PERCENTAGE_FORMAT
};
