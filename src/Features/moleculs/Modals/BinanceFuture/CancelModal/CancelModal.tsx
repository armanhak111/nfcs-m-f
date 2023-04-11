import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCurrAnalyticId, getCurrentUser } from '../../../../../Store/Selectors/auth';
import { deleteUserAnalytics } from '../../../../../Store/Slices/auth';
import { setActionModal } from '../../../../../Store/Slices/modal';
import Button from '../../../../atoms/Button';
import styles from './cancelModal.module.scss';

const CancelModal: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const userId = currentUser.id;
  const currAnalyticId = useSelector(getCurrAnalyticId);
  const deleteOrder = () => {
    dispatch(deleteUserAnalytics(userId, currAnalyticId));
    dispatch(setActionModal(''));
  };
  return (
    <>
      <div className={styles.cancelModal}>
        <h2 className={styles.modalTitle}>Are you sure that you want to cancel the order ? </h2>
        <div className={styles.detailsList}>
          <div className={styles.modalBtn}>
            <Button onClick={deleteOrder} type="secondary" id={'Cencel'} />
            <Button
              onClick={() => dispatch(setActionModal(''))}
              type="primary"
              id={'Keep Planer'}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CancelModal;
