import { Outlet, useLocation } from 'react-router-dom';

import Menu from './Menu';
import Header from './Header';
import Content from './Content';

import styles from './style.module.less';

const OUTLET_EXCEPTS = ['/login'];

const Layouts = () => {
  const { pathname = '/' } = useLocation();

  return OUTLET_EXCEPTS?.includes(pathname) ? (
    <Outlet />
  ) : (
    <div className={styles.wrap}>
      <Header />

      <div className={styles.container}>
        <Menu />

        <Content>
          <Outlet />
        </Content>
      </div>
    </div>
  )
};

export default Layouts;
