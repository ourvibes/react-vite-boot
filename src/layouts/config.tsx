import React from 'react';
import { MenuProps } from 'antd';
import { NavLink } from 'react-router-dom';
import { CompassOutlined, EnvironmentOutlined, HeartOutlined } from '@ant-design/icons/lib/icons';

const menuItemsConfig: MenuProps['items'] = [
  {
    label: <NavLink to="/home">首页</NavLink>,
    key: '/home',
    icon: <CompassOutlined />,
  },
  {
    label: '兴趣爱好',
    key: '/lover',
    icon: <EnvironmentOutlined />,
    children: [
      {
        label: '音乐',
        key: '/music',
      },
      {
        label: '短视频',
        key: '/video',
      },
    ],
  },
  {
    label: <NavLink to="/about">关于</NavLink>,
    key: '/about',
    icon: <HeartOutlined />,
  },
];

export default menuItemsConfig;
