import React from 'react';
import { useSelector } from 'react-redux';

import { getCurrAnalyticId, getOrderDetails } from '../../../../../Store/Selectors/auth';
import styles from './../detailsModal.module.scss';

const DetailsStock: React.FC = () => {
  const orderDetails = useSelector(getOrderDetails);
  const currAnalyticId = useSelector(getCurrAnalyticId);
  return (
    <>
      <h2 className={styles.modalTitle}>Stock Forecast</h2>
      {orderDetails.map((item: any) => {
        if (item.orderType === 'stock' && item.analyticId === currAnalyticId)
          return (
            <div key={item.analyticId} className={styles.detailsList}>
              <div className={styles.detailsItemContent}>
                <p className={styles.detailtsItemTitle}>Industry</p>
                <p className={styles.detailsItemText}>{item.industry}</p>
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
            </div>
          );
      })}
    </>
  );
};
export default DetailsStock;
