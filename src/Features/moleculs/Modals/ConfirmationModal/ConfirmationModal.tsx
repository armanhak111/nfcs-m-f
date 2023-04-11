import React from 'react';

import { ROUTES } from '../../../../Constants/Routes';
import Button from '../../../atoms/Button';
import styles from './confirmationModal.module.scss';

const ConfirmationModal = () => {
  return (
    <>
      <div className={styles.cancelModal}>
        <h2 className={styles.modalTitle}>Your order successful</h2>
        <div className={styles.detailsList}>
          <div className={styles.modalBtn}>
            <Button
              onClick={() => {
                window.location.href = ROUTES.DASHBOARD;
              }}
              type="secondary"
              id="Go"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
