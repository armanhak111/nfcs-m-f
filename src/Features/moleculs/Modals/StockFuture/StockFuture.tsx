import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { STOCK_FUTURE_ORDER } from '../../../../Constants/dashboard';
import { getCurrentUser } from '../../../../Store/Selectors/auth';
import { orderAnalytics } from '../../../../Store/Slices/auth';
import { CURRENT_DATE, orderStockValidationScheme } from '../../../../Utils/validations';
import Button from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import Input from '../../../atoms/Input';
import TabSwitch from '../../../atoms/TabSwitch/TabSwitch';
import styles from './stockFuture.module.scss';

const STOCK_INDUSTRY = [
  {
    id: 'contactus.dropdown.healthcare',
    value: 'Healthcare Sector',
  },
  {
    id: 'contactus.dropdown.materials',
    value: 'Materials Sector',
  },
  {
    id: 'contactus.dropdown.realEstate',
    value: 'Real Estate Sector',
  },
  {
    id: 'contactus.dropdown.costumerStap',
    value: 'Consumer Staples Sector',
  },
  {
    id: 'contactus.dropdown.costumerDisc',
    value: 'Consumer Discretionary Sector',
  },
  {
    id: 'contactus.dropdown.utilitiesSector',
    value: 'Utilities Sector',
  },
  {
    id: 'contactus.dropdown.energySector',
    value: 'Energy Sector',
  },
  {
    id: 'contactus.dropdown.industrialSector',
    value: 'Industrials Sector',
  },
  {
    id: 'contactus.dropdown.costumerServiceSector',
    value: 'Consumer Services Sector',
  },

  {
    id: 'contactus.dropdown.financialSector',
    value: 'Financials Sector',
  },
  {
    id: 'contactus.dropdown.technologySector',
    value: 'Technology Sector',
  },
];
const StockFuture: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const userId = currentUser.id;
  const formik = useFormik({
    initialValues: STOCK_FUTURE_ORDER,
    validationSchema: orderStockValidationScheme,
    onSubmit: (arg) => {
      const data = {
        ...arg,
        date: CURRENT_DATE,
        orderType: 'stock',
        id: userId,
      };
      dispatch(orderAnalytics(data));
    },
  });
  return (
    <>
      <h2 className={styles.modalTitle}>Stock Forecast</h2>
      <div className={styles.detailsList}>
        <div className={styles.detailsItemContent}>
          <Dropdown
            name="orderCategory"
            label="Stock Industry"
            options={STOCK_INDUSTRY}
            value={formik.values.orderCategory}
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
                type="number"
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
                  type="number"
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
              !formik.touched.orderCategory ||
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
