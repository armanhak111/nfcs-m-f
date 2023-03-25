import React from 'react';

import Button from '../../../../atoms/Button';
import styles from './cancelModal.module.scss';

const CancelModal: React.FC = () => {
  return (
    <>
      <div className={styles.cancelModal}>
        <h2 className={styles.modalTitle}>Are you sure that you want to cancel the order ? </h2>
        <div className={styles.detailsList}>
          <div className={styles.modalBtn}>
            <Button onClick={() => null} type="secondary" id={'Cencel'} />
            <Button onClick={() => null} type="primary" id={'Keep Planer'} />
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelModal;
