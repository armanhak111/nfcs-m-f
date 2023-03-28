import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

import { CRYPTO_FUTURE_ORDER } from '../../../../Constants/dashboard';
import { orderAnalytics } from '../../../../Store/Slices/auth';
import { orderCryptoValidationScheme } from '../../../../Utils/validations';
import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import TabSwitch from '../../../atoms/TabSwitch/TabSwitch';
import styles from './cryptoFuture.module.scss';

const CryptoFuture: React.FC = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: CRYPTO_FUTURE_ORDER,
    validationSchema: orderCryptoValidationScheme,
    onSubmit: (arg: any) => {
      dispatch(orderAnalytics(arg));
    },
  });
  console.log('formik', formik.values);
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
                name="minPrice"
                placeHolder="Min"
                label="Price Range"
                onClick={() => null}
                onFocus={() => null}
                onChange={() => null}
                value={formik.values.minPrice}
                formik={formik}
              />
            </div>
            <div className={styles.divider} />
            <div className={styles.inputsItem}>
              <div className={styles.inputsItemPrice}>
                <TabSwitch formik={formik} />
                <Input
                  htmlFor="name"
                  type="text"
                  name="maxPrice"
                  placeHolder="Max"
                  label=" "
                  onClick={() => null}
                  onFocus={() => null}
                  onChange={() => null}
                  value={formik.values.maxPrice}
                  formik={formik}
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
