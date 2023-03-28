import { useFormik } from 'formik';
import React from 'react';
import { useDispatch } from 'react-redux';

import { NFT_FUTURE_ORDER } from '../../../../Constants/dashboard';
import { orderAnalytics } from '../../../../Store/Slices/auth';
import { orderNftValidationScheme } from '../../../../Utils/validations';
import Button from '../../../atoms/Button';
import Dropdown from '../../../atoms/Dropdown';
import Input from '../../../atoms/Input';
import TabSwitch from '../../../atoms/TabSwitch/TabSwitch';
import styles from './nftFuture.module.scss';

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
const NftFuture: React.FC = () => {
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: NFT_FUTURE_ORDER,
    validationSchema: orderNftValidationScheme,
    onSubmit: (arg) => {
      dispatch(orderAnalytics(arg));
    },
  });
  console.log('formik', formik.values);
  return (
    <>
      <h2 className={styles.modalTitle}>NFT Forecast</h2>
      <div className={styles.detailsList}>
        <div className={styles.detailsItemContent}>
          <Dropdown
            name="platform"
            label="Platform"
            options={INQUIRY_OPTIONS}
            value={formik.values.platform}
            defaultValue="contactus.dropdown.generalInquiry"
            onClick={() => null}
            onChange={() => null}
            formik={formik}
          />
        </div>
        <div className={styles.detailsItemContent}>
          <Dropdown
            name="type"
            label="Type"
            options={INQUIRY_OPTIONS}
            value={formik.values.type}
            defaultValue="contactus.dropdown.generalInquiry"
            onClick={() => null}
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
export default NftFuture;
