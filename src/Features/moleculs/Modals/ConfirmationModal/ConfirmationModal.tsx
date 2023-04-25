import React from 'react';

import { ROUTES } from '../../../../Constants/Routes';
import Button from '../../../atoms/Button';
import styles from './confirmationModal.module.scss';

const ConfirmationModal = () => {
  return (
    <>
      <div className={styles.confirmModal}>
        <p className={styles.modalTitle}> Your request has been successfully formulated</p>
        <p className={styles.modalSubtitle}>
          {' '}
          On the waiting list, you will be able to see and follow your analytics
        </p>
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
