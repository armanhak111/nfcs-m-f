import React from 'react';
import { useSelector } from 'react-redux';

import { getCurrAnalyticId, getOrderDetails } from '../../../../../Store/Selectors/auth';
import styles from './../detailsModal.module.scss';

const DetaislCrypto: React.FC = () => {
  const orderDetails = useSelector(getOrderDetails);
  const currAnalyticId = useSelector(getCurrAnalyticId);

  return (
    <>
      <h2 className={styles.modalTitle}>Crypto Forecast</h2>
      {orderDetails.map((item: any) => {
        if (item.orderType === 'crypto' && item.analyticId === currAnalyticId)
          return (
            <div key={item.analyticId} className={styles.detailsList}>
              <div key={item.analyticId} className={styles.detailsItemContent}>
                <p key={item.sumType} className={styles.detailtsItemTitle}>
                  Price Range :<span style={{ marginLeft: '3px' }}>{item.sumType}</span>
                </p>

                <p key={item.minPrice} className={styles.detailsItemText}>
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

export default DetaislCrypto;
