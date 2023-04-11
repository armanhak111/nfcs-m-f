import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import Modal from 'react-modal';
import { useDispatch } from 'react-redux';

import CloseSvg from '../../../Assets/Icons/CloseSvg';
import ErrorSvg from '../../../Assets/Icons/ErrorSvg';
import SuccesSvg from '../../../Assets/Icons/SuccesSvg';
import Button from '../../../Features/atoms/Button';
import Typography from '../../../Features/atoms/Typography';
import { useCurrentButtonActions, useModal } from '../../../Hooks/useModal';
import { setErrorMessage, setModal } from '../../../Store/Slices/modal';
import styles from './modal.module.scss';

const badSuspension = {
  hidden: {
    y: '-100vh',
    opacity: 0,
    transform: 'scale(0) rotateX(-360deg)',
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      duration: 0.2,
      type: 'spring',
      damping: 35,
      stiffness: 500,
    },
  },
  exit: {
    y: '-100vh',
    opacity: 0,
  },
};

Modal.setAppElement('#root');

const Modals: React.FC = () => {
  const { isOpen, closeModal, currentModal } = useModal();

  const { action } = useCurrentButtonActions();
  const dispatch = useDispatch();

  const currentModalButtonAction = () => {
    document.body.style.overflow = 'auto';
    dispatch(setModal(''));
    dispatch(setErrorMessage(''));
    if (action) {
      action();
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      shouldCloseOnEsc={currentModal?.outsideClose}
      id={currentModal?.id}
      onRequestClose={closeModal}
      overlayClassName={styles.modalOverlay}
      className={styles.modalClass}
    >
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key="modal"
          className={styles.modalInner}
          variants={badSuspension}
          initial="hidden"
          exit="initial"
          animate="visible"
        >
          {currentModal?.outsideClose && (
            <div onClick={closeModal} className={styles.modalCloser}>
              <CloseSvg />
            </div>
          )}
          <div className={styles.modalBody}>
            <Typography component="h2" id={currentModal?.title} className={styles.modalTitle} />
            <Typography
              component="p"
              id={currentModal?.subtitle}
              className={styles.modalSubTitle}
            />
            <div className={styles.modalIcon}>
              {currentModal?.type === 'error' ? <ErrorSvg /> : <SuccesSvg />}
            </div>
            <div className={styles.modalBtn}>
              <Button
                onClick={currentModalButtonAction}
                type="primary"
                customClass={styles.cardBtn}
                id={currentModal?.buttonText}
              />
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default Modals;
