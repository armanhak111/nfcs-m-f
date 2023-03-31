import React from 'react';
import { useSelector } from 'react-redux';

import { getOrderDetails } from '../../../../../Store/Selectors/auth';
import styles from './../detailsModal.module.scss';

const DetaislCrypto: React.FC = () => {
  const orderDetails = useSelector(getOrderDetails);
  console.log(orderDetails, 'orderr');
  return (
    <>
      <h2 className={styles.modalTitle}>Crypto Forecast</h2>
      {orderDetails.map((item: any) => {
        if (item.orderType === 'crypto')
          return (
            <div key={item.analyticId} className={styles.detailsList}>
              <div key={item.analyticId} className={styles.detailsItemContent}>
                <p key={item.analyticId} className={styles.detailtsItemTitle}>
                  Price Range :
                  <span key={item.analyticId} style={{ marginLeft: '3px' }}>
                    {item.sumType}
                  </span>
                </p>

                <p key={item.analyticId} className={styles.detailsItemText}>
                  {item.minPrice}$ <span key={item.analyticId} className={styles.line}></span>
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
