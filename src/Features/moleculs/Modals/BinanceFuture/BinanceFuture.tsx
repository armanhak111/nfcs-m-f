import { useFormik } from 'formik';
import React from 'react';
// import { string } from 'yup';
import { useDispatch, useSelector } from 'react-redux';

import { BINANCE_FUTURE_ORDER } from '../../../../Constants/dashboard';
import { TIME_ZONE } from '../../../../Constants/timeZone';
import { getCurrentUser } from '../../../../Store/Selectors/auth';
import { orderAnalytics } from '../../../../Store/Slices/auth';
import { CURRENT_DATE, orderBinanceValidationScheme } from '../../../../Utils/validations';
import Button from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import Input from '../../../atoms/Input';
import TabSwitch from '../../../atoms/TabSwitch/TabSwitch';
import styles from './binanceFuture.module.scss';

const INQUIRY_OPTIONS = [
  {
    id: 'contactus.dropdown.generalInquiry',
    value: 'General Inquiry',
  },
  {
    id: 'contactus.dropdown.salesInquiry',
    value: 'Sales Inquiry',
  },
  {
    id: 'contactus.dropdown.techIssue',
    value: 'Technical Issue',
  },
];
const BinanceFuture = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const userId = currentUser.id;
  const formik = useFormik({
    initialValues: BINANCE_FUTURE_ORDER,
    validationSchema: orderBinanceValidationScheme,
    onSubmit: (arg) => {
      const data = {
        ...arg,
        date: CURRENT_DATE,
        orderType: 'binance',
        id: userId,
      };
      dispatch(orderAnalytics(data));
    },
  });

  console.log('formik values', formik.values);

  return (
    <>
      <h2 className={styles.modalTitle}>Binance Future Forecast</h2>
      <div className={styles.detailsList}>
        <div className={styles.detailsItemContent}>
          <Dropdown
            name="incuiryType"
            label="contactus.dropdown.label"
            options={INQUIRY_OPTIONS}
            value={formik.values.incuiryType}
            defaultValue="Select"
            onClick={formik.setFieldTouched}
            onChange={() => null}
            formik={formik}
          />
        </div>
        <div className={styles.detailsItemContent}>
          <label className={styles.label}>Adjust Leverage</label>
          <div className={styles.leverageItem}>
            <button
              onClick={() => {
                let currentVal = formik.values.adjustLeverage;
                const val = 0;
                if (currentVal > 10) {
                  currentVal -= 10;
                } else {
                  currentVal = 1;
                }

                formik.setFieldValue('adjustLeverage', `${+currentVal + val}`);
              }}
              className={styles.leverageMinus}
            >
              -
            </button>
            <div className={styles.leverageCount}>
              <span>{formik.values.adjustLeverage}</span>x
            </div>
            <button
              onClick={() => {
                const currentVal = formik.values.adjustLeverage;
                let val = 0;
                if (currentVal < 50 && +currentVal !== 1) {
                  val = 10;
                } else if (+currentVal === 1) {
                  val += 9;
                }

                formik.setFieldValue('adjustLeverage', `${+currentVal + val}`);
              }}
              className={styles.leverageplus}
            >
              +
            </button>
          </div>
          <div className={styles.leverageRange}>
            <input
              type="range"
              onChange={() => {
                const currentVal = formik.values.adjustLeverage;
                let val = 0;
                if (currentVal < 50 && +currentVal !== 1) {
                  val = 10;
                } else if (+currentVal === 1) {
                  val += 9;
                }

                formik.setFieldValue('adjustLeverage', `${+currentVal + val}`);
              }}
            />
            <div className={styles.leverageSum}>
              <p className={styles.active}>1x</p>
              <p className={styles.active}>10x</p>
              <p className={styles.active}>20x</p>
              <p>30x</p>
              <p>40x</p>
              <p>50x</p>
            </div>
          </div>
        </div>
        <div className={styles.detailsItemContent}>
          <div className={styles.inputsItems}>
            <div className={styles.inputsItem}>
              <Input
                htmlFor="minPrice"
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
                  htmlFor="maxPrice"
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
        <div className={styles.detailsItemContent}>
          <Dropdown
            name="timeZone"
            label="Time Zone"
            options={TIME_ZONE}
            value={formik.values.timeZone}
            defaultValue="Select"
            onClick={formik.setFieldTouched}
            onChange={() => null}
            formik={formik}
          />
        </div>

        <div className={styles.modalBtn}>
          <Button
            onClick={formik.handleSubmit}
            customClass={styles.cardBtn}
            disabeled={Boolean(
              !formik.touched.incuiryType ||
                !formik.touched.minPrice ||
                !formik.touched.maxPrice ||
                !formik.touched.timeZone
            )}
            type="primary"
            id={'Order'}
          />
        </div>
      </div>
    </>
  );
};

export default BinanceFuture;
