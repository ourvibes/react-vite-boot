import React, { memo } from 'react';
import { Space, Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

import styles from '../style.module.less';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <Space>
          <span>react-vite-boot</span>
        </Space>
      </div>

      <div className={styles.user}>
        <Space size={16}>
          <Avatar size={36} icon={<UserOutlined />} />
          <span>qzjiang</span>
        </Space>
      </div>
    </div>
  );
}

export default memo(Header);
