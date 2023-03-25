import React from 'react';

import TooltipSvg from '../../../../../Assets/Icons/cards/TooltipSvg';
import styles from './../detailsModal.module.scss';

const DetailsBinance: React.FC = () => {
  return (
    <>
      <h2 className={styles.modalTitle}>Binance Future Forecast</h2>
      <div className={styles.detailsList}>
        <div className={styles.detailsItemContent}>
          <p className={styles.detailtsItemTitle}>
            Inquiry type <TooltipSvg />
          </p>
          <p className={styles.detailsItemText}>Cross</p>
        </div>
        <div className={styles.detailsItemContent}>
          <p className={styles.detailtsItemTitle}>Adjust Leverage</p>
          <p className={styles.detailsItemText}>25x</p>
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
          <p className={styles.detailtsItemTitle}>Time Zone</p>
          <p className={styles.detailsItemText}>
            (UTC - 05;00) Eastern Time (US & Canada) America/Iqualuit
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

export default DetailsBinance;
