import { motion } from 'framer-motion';
import React from 'react';

import { MainPortal } from '../../../Assets/Icons/MainPortal';
import styles from './portal.module.scss';

const Portal: React.FC = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 2 }}
        className={styles.portalHeader}
      >
        <h2 className="title">NFCS Portal</h2>
        <p className="subTitle">
          NFCS is a portal that will give you the opportunity to understand the world of{' '}
          <a href="/about" className={styles.portalHeaderLink}>
            Cryptocurrencies, Futures, NFT and Stocks
          </a>{' '}
          and offer you the best way to invest your founds.
        </p>
      </motion.div>
      <div className={styles.portal}>
        <div className={`${styles.wrapperPortal} wrapperPortal`}>
          <MainPortal />
        </div>
      </div>
    </>
  );
};

export default Portal;
