import React from 'react';

import styles from './../detailsModal.module.scss';

const DetailsNft: React.FC = () => {
  return (
    <>
      <h2 className={styles.modalTitle}>NFT Forecast</h2>
      <div className={styles.detailsList}>
        <div className={styles.detailsItemContent}>
          <p className={styles.detailtsItemTitle}>Platform</p>
          <p className={styles.detailsItemText}>Opensea</p>
        </div>
        <div className={styles.detailsItemContent}>
          <p className={styles.detailtsItemTitle}>Type</p>
          <p className={styles.detailsItemText}>Photography</p>
        </div>
        <div className={styles.detailsItemContent}>
          <p className={styles.detailtsItemTitle}>
            Price Range : <span>USD</span>
          </p>
          <p className={styles.detailsItemText}>
            100$ <span className={styles.line}></span>424$
          </p>
        </div>
        <div className={styles.detailsItemContent}>
          <p className={styles.detailtsItemTitle}>Date</p>
          <p className={styles.detailsItemText}>22/Jun/1684</p>
        </div>
      </div>
    </>
  );
};

export default DetailsNft;
