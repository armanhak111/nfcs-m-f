/* eslint-disable @typescript-eslint/no-empty-function */
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import Modal from 'react-modal';
import { useDispatch, useSelector } from 'react-redux';

import CloseSvg from '../../../Assets/Icons/CloseSvg';
import { ACTION_MODALS } from '../../../Constants/modals';
import { getActionalModals } from '../../../Store/Selectors/modal';
import { setActionModal } from '../../../Store/Slices/modal';
// import DetaislCrypto from '../../moleculs/Modals/DetailsModal/DetailsCrypto/DetailsCrypto';
// import DetailsStock from '../../moleculs/Modals/DetailsModal/DetailsStock/DetailsStock';
// import CryptoFuture from '../../moleculs/Modals/CryptoFuture/CryptoFuture';
// import NftFuture from '../../moleculs/Modals/NFTFuture/NftFuture';
// import StockFuture from '../../moleculs/Modals/StockFuture/StockFuture';
// import BinanceFuture from '../../moleculs/Modals/BinanceFuture';
// import DetailsBinance from '../../moleculs/Modals/DetailsModal/DetailsBinanceFuture/DetailsBinance';
// import DetailsNft from '../../moleculs/Modals/DetailsModal/DetailsNftFuture/DetailsNft';
import styles from './actionalModals.module.scss';

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

const ActionalModals: React.FC = () => {
  const modal = useSelector(getActionalModals);
  console.log('actionModal', modal);
  const getModalContent = () => {
    const Component = ACTION_MODALS[modal];
    return ACTION_MODALS[modal] ? <Component /> : null;
  };

  const dispatch = useDispatch();
  return (
    <Modal
      isOpen={!!modal}
      shouldCloseOnEsc={!!modal}
      id={'currentModal?.id'}
      onRequestClose={() => dispatch(setActionModal(''))}
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
          <div onClick={() => dispatch(setActionModal(''))} className={styles.modalCloser}>
            <CloseSvg />
          </div>
          {/* <BinanceFuture /> */}
          {/* <NftFuture /> */}
          {/* <StockFuture /> */}
          {/* <CryptoFuture /> */}
          {/* <DetailsBinance /> */}
          {/* <DetailsNft /> */}
          {/* <DetailsStock /> */}
          {/* <DetaislCrypto /> */}
          {/* <CancelModal /> */}
          {getModalContent()}
        </motion.div>
      </AnimatePresence>
    </Modal>
  );
};

export default ActionalModals;
