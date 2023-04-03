import React from 'react';
import { useDispatch } from 'react-redux';

import { ROUTES } from '../../../../Constants/Routes';
import { setCurrentSlide } from '../../../../Store/Slices/dashboardLocal';
// import { setActionModal } from '../../../../Store/Slices/modal';
import Button from '../../../atoms/Button';
import styles from './confirmationModal.module.scss';

const ConfirmationModal = () => {
  const dispatch = useDispatch();
  const goForecastLists = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setCurrentSlide(e.currentTarget.dataset.current));
  };

  return (
    <>
      <div className={styles.cancelModal}>
        <h2 className={styles.modalTitle}>???????? ? </h2>
        <div className={styles.detailsList}>
          <div className={styles.modalBtn}>
            <span onClick={goForecastLists}>
              <Button
                onClick={() => {
                  window.location.href = ROUTES.DASHBOARD;
                  // dispatch(setActionModal(''));
                }}
                type="primary"
                id={'goo'}
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default ConfirmationModal;
