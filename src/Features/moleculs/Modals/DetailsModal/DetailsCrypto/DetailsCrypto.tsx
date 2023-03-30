import React from 'react';
import { useSelector } from 'react-redux';

import { getOrderDetails } from '../../../../../Store/Selectors/auth';
import styles from './../detailsModal.module.scss';

const DetaislCrypto: React.FC = () => {
  const orderDetails = useSelector(getOrderDetails);
  return (
    <>
      <h2 className={styles.modalTitle}>Stock Forecast</h2>
      {orderDetails.map((item: any) => {
        return (
          <div key={item.id} className={styles.detailsList}>
            <div className={styles.detailsItemContent}>
              <p className={styles.detailtsItemTitle}>
                Price Range :
                <span key={item.id} style={{ marginLeft: '3px' }}>
                  {item.sumType}
                </span>
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

export default DetaislCrypto;
