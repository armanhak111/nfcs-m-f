import React from 'react';

import Loader from '../../Multiusable/Loader';
import styles from './PageLoader.module.scss';

export const PageLoader: React.FC = () => {
  return (
    <div className={styles.main}>
      <Loader type="auth" />
    </div>
  );
};
