import React, { useState } from 'react';

import styles from './tabSwitch.module.scss';

const TabSwitch: React.FC<{ formik?: any }> = ({ formik }) => {
  const [moneyType, setMoneyType] = useState<string>('USD');

  const handelChange = () => {
    if (moneyType === 'USD') {
      setMoneyType(formik.setFieldValue('sumType', 'EUR'));
    } else {
      setMoneyType(formik.setFieldValue('sumType', 'USD'));
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
