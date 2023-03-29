import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

import { STOCK_FUTURE_ORDER } from '../../../../Constants/dashboard';
import { orderAnalytics } from '../../../../Store/Slices/auth';
import { orderStockValidationScheme } from '../../../../Utils/validations';
import Button from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import Input from '../../../atoms/Input';
import TabSwitch from '../../../atoms/TabSwitch/TabSwitch';
import styles from './stockFuture.module.scss';

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
const StockFuture: React.FC = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: STOCK_FUTURE_ORDER,
    validationSchema: orderStockValidationScheme,
    onSubmit: (arg) => {
      dispatch(orderAnalytics(arg));
    },
  });
  console.log('fformik', formik.values);
  return (
    <>
      <h2 className={styles.modalTitle}>Stock Forecast</h2>
      <div className={styles.detailsList}>
        <div className={styles.detailsItemContent}>
          <Dropdown
            name="industry"
            label="Industry"
            options={INQUIRY_OPTIONS}
            value={formik.values.industry}
            defaultValue="Select"
            onClick={formik.setFieldTouched}
            onChange={() => null}
            formik={formik}
          />
        </div>

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
            disabeled={Boolean(
              !formik.touched.industry ||
                !formik.touched.minPrice ||
                !formik.touched.maxPrice ||
                formik.errors.minPrice ||
                formik.errors.maxPrice
            )}
            type="primary"
            id={'Order'}
          />
        </div>
      </div>
    </>
  );
};

export default StockFuture;
