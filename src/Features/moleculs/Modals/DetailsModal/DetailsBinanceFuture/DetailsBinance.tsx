import React from 'react';
import { useSelector } from 'react-redux';

// import TooltipSvg from '../../../../../Assets/Icons/cards/TooltipSvg';
import { getOrderDetails } from '../../../../../Store/Selectors/auth';
import styles from './../detailsModal.module.scss';

const DetailsBinance: React.FC = () => {
  const orderDetails = useSelector(getOrderDetails);
  return (
    <>
      <h2 className={styles.modalTitle}>Binance Future Forecast</h2>
      {orderDetails.map((item: any) => {
        if (item.orderType === 'binance')
          return (
            <div key={item.analyticId} className={styles.detailsList}>
              <div className={styles.detailsItemContent}>
                <p className={styles.detailtsItemTitle}>Inquiry type</p>
                <p className={styles.detailsItemText}>{item.incuiryType}</p>
              </div>
              <div className={styles.detailsItemContent}>
                <p className={styles.detailtsItemTitle}>Adjust Leverage</p>
                <p className={styles.detailsItemText}>{item.adjustLeverage}x</p>
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
              <div className={styles.detailsItemContent}>
                <p className={styles.detailtsItemTitle}>Time Zone</p>
                <p className={styles.detailsItemText}>{item.timeZone}</p>
              </div>
            </div>
          );
      })}
    </>
  );
};

export default DetailsBinance;
