import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { CRYPTO_FUTURE_ORDER } from '../../../../Constants/dashboard';
import { getCurrentUser } from '../../../../Store/Selectors/auth';
import { orderAnalytics } from '../../../../Store/Slices/auth';
import { CURRENT_DATE, orderCryptoValidationScheme } from '../../../../Utils/validations';
import Button from '../../../atoms/Button';
import Input from '../../../atoms/Input';
import TabSwitch from '../../../atoms/TabSwitch/TabSwitch';
import styles from './cryptoFuture.module.scss';

const CryptoFuture = () => {
  const currentUser = useSelector(getCurrentUser);
  const userId = currentUser.id;
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: CRYPTO_FUTURE_ORDER,
    validationSchema: orderCryptoValidationScheme,
    onSubmit: (arg: any) => {
      const data = {
        ...arg,
        date: CURRENT_DATE,
        orderType: 'crypto',
        id: userId,
      };
      dispatch(orderAnalytics(data));
    },
  });
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
                onClick={formik.setFieldTouched}
                onFocus={formik.setFieldTouched}
                onChange={() => null}
                value={formik.values.minPrice}
                formik={formik}
                error={formik.touched.minPrice && formik.errors.minPrice}
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
                  onClick={formik.setFieldTouched}
                  onFocus={formik.setFieldTouched}
                  onChange={() => null}
                  value={formik.values.maxPrice}
                  formik={formik}
                  error={formik.touched.maxPrice && formik.errors.maxPrice}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.modalBtn}>
          <Button
            onClick={formik.handleSubmit}
            customClass={styles.cardBtn}
            disabeled={Boolean(
              !formik.touched.minPrice ||
                !formik.touched.maxPrice ||
                formik.errors.minPrice ||
                formik.errors.maxPrice
            )}
            type="primary"
            id="Order"
          />
        </div>
      </div>
    </>
  );
};
export default CryptoFuture;
