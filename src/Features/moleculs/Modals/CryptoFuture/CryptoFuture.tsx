import React from 'react';

import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import styles from './cryptoFuture.module.scss';

const CryptoFuture = () => {
  return (
    <>
      <h2 className={styles.modalTitle}>Crypto Forecast</h2>
      <div className={styles.detailsList}>
        <div className={styles.detailsItemContent}>
          <div className={styles.inputsItems}>
            <div className={styles.inputsItem}>
              <Input
                htmlFor="name"
                type="text"
                name="name"
                placeHolder="Min"
                label="Price Range"
                onClick={() => null}
                onFocus={() => null}
                onChange={() => null}
                value={' '}
              />
            </div>
            <div className={styles.divider} />
            <div className={styles.inputsItem}>
              <div className={styles.inputsItemPrice}>
                <div className={styles.customSwich}>
                  <input type="checkbox" id="modal_swich" />
                  <label htmlFor="modal_swich">
                    <p className="col_">USD</p>
                    <p className="col_">EUR</p>
                  </label>
                </div>
                <Input
                  htmlFor="name"
                  type="text"
                  name="name"
                  placeHolder="Max"
                  label=" "
                  onClick={() => null}
                  onFocus={() => null}
                  onChange={() => null}
                  value={''}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modalBtn}>
          <Button onClick={() => null} type="primary" id={'Order'} />
        </div>
      </div>
    </>
  );
};
export default CryptoFuture;