import React, { memo } from 'react';

import styles from '../style.module.less';

interface ContentProps {
  children?: React.ReactNode;
}

const Content: React.FC<ContentProps> =  (props: ContentProps) => {
  const { children } = props;
  return (
    <div className={styles.content}>
      {children}
    </div>
  );
}

export default memo(Content);
