import dayjs from 'dayjs';

import {
  DATE_TIME_FORMAT_STRING,
  DATE_FORMAT_STRING,
  TIME_FORMAT_STRING,
  HOUR_MIN_FORMAT_STRING,
  SLASH_DATE_TIME_FORMAT_STRING,
} from '@constants';

const formatTime = (
  time: dayjs.Dayjs | string | undefined,
  format: string = DATE_TIME_FORMAT_STRING,
) => {
  return dayjs(time).format(format);
};

export default formatTime;

export {
  DATE_FORMAT_STRING,
  TIME_FORMAT_STRING,
  HOUR_MIN_FORMAT_STRING,
  SLASH_DATE_TIME_FORMAT_STRING,
};
