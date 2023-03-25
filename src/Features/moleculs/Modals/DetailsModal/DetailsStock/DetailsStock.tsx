import React from 'react';

import styles from './../detailsModal.module.scss';

const DetailsStock: React.FC = () => {
  return (
    <>
      <h2 className={styles.modalTitle}>Stock Forecast</h2>
      <div className={styles.detailsList}>
        <div className={styles.detailsItemContent}>
          <p className={styles.detailtsItemTitle}>Industry</p>
          <p className={styles.detailsItemText}>Other</p>
        </div>
        <div className={styles.detailsItemContent}>
          <p className={styles.detailtsItemTitle}>
            Price Range : <span>USD</span>
          </p>
          <p className={styles.detailsItemText}>
            100$ <span className={styles.line}></span>424$
          </p>
        </div>
      </div>
    </>
  );
};
export default DetailsStock;
