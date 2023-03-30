import React from 'react';

import styles from './tabSwitch.module.scss';

const TabSwitch: React.FC<{ formik?: any }> = ({ formik }) => {
  const handelChange = () => {
    if (formik.values.sumType === 'USD') {
      formik.setFieldValue('sumType', 'EUR');
    } else {
      formik.setFieldValue('sumType', 'USD');
    }
  };

  return (
    <div className={styles.customSwich}>
      <input type="checkbox" id="modal_swich" onChange={handelChange} />
      <label htmlFor="modal_swich">
        <p className="col_">USD</p>
        <p className="col_">EUR</p>
      </label>
    </div>
  );
};

export default TabSwitch;
