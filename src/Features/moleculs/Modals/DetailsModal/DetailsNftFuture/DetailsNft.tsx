import React from 'react';
import { useSelector } from 'react-redux';

import { getCurrAnalyticId, getOrderDetails } from '../../../../../Store/Selectors/auth';
import styles from './../detailsModal.module.scss';

const DetailsNft: React.FC = () => {
  const orderDetails = useSelector(getOrderDetails);
  const currAnalyticId = useSelector(getCurrAnalyticId);
  return (
    <>
      <h2 className={styles.modalTitle}>NFT Forecast</h2>
      {orderDetails.map((item: any) => {
        if (item.orderType === 'nft' && item.analyticId === currAnalyticId)
          return (
            <div key={item.analyticId} className={styles.detailsList}>
              <div className={styles.detailsItemContent}>
                <p className={styles.detailtsItemTitle}>Platform</p>
                <p className={styles.detailsItemText}>{item.platform}</p>
              </div>
              <div className={styles.detailsItemContent}>
                <p className={styles.detailtsItemTitle}>Type</p>
                <p className={styles.detailsItemText}>{item.type}</p>
              </div>
              <div className={styles.detailsItemContent}>
                <p className={styles.detailtsItemTitle}>
                  Price Range : <span>{item.sumType}</span>
                </p>
                <p className={styles.detailsItemText}>
                  {item.minPrice}$ <span className={styles.line}></span>
                  {item.maxPrice}$
                </p>
              </div>
              {/* <div className={styles.detailsItemContent}>
                <p className={styles.detailtsItemTitle}>Date</p>
                <p className={styles.detailsItemText}>{item.date}</p>
              </div> */}
            </div>
          );
      })}
    </>
  );
};

export default DetailsNft;
