import 'antd/dist/antd.less';
import 'react-app-polyfill/stable';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import numeral from 'numeral';

import './global.less';

numeral.nullFormat('-');

dayjs.locale('zh-cn');
