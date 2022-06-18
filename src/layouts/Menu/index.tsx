import React, { memo } from 'react';
import { Menu } from 'antd';

import itemsConfig from '../config';
import styles from '../style.module.less';

function Menus() {
  return (
    <div>
      <Menu
        className={styles.menu}
        mode="inline"
        defaultSelectedKeys={['/home']}
        items={itemsConfig}
      />
    </div>
  );
}

export default memo(Menus);
