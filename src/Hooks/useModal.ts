import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { MODALS, TModalVariantsSuccess } from '../Constants/modals';
import { ROUTES } from '../Constants/Routes';
import { getErrorMessage, getModal } from '../Store/Selectors/modal';
import { setErrorMessage, setModal } from '../Store/Slices/modal';

export const useCurrentButtonActions = () => {
  const modal: TModalVariantsSuccess | '' = useSelector(getModal);

  const [action, setAction] = useState<any>();
  useEffect(() => {
    switch (modal) {
      case 'change-password':
        setAction(() => () => (window.location.pathname = ROUTES.DASHBOARD));
        break;
      case 'forgot-password-success':
        setAction(() => () => (window.location.pathname = ROUTES.HOME));
        break;
      case 'reset-password-success':
        setAction(() => () => (window.location.pathname = ROUTES.SIGN_IN));
        break;
      default:
        setAction(null);
    }
  }, [modal]);
  return {
    action,
  };
};
export const useModal = () => {
  const modal: TModalVariantsSuccess | '' = useSelector(getModal);
  const error = useSelector(getErrorMessage);

  const dispatch = useDispatch();
  const isOpen = useMemo(() => {
    return !!modal || !!error;
  }, [modal, error]);

  const errorCurrentModal = useMemo(() => {
    return {
      id: 'error-modal',
      type: 'error',
      title: 'modals.error.title',
      subtitle: error,
      buttonText: 'modals.error.button',
      outsideClose: true,
    };
  }, [error]);

  const closeModal = () => {
    if (currentModal && currentModal.outsideClose) {
      document.body.style.overflow = 'auto';
      dispatch(setModal(''));
      dispatch(setErrorMessage(''));
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    }
  }, [isOpen]);

  const currentModal = useMemo(() => {
    if (modal) {
      return MODALS[modal];
    }
    if (error) {
      return errorCurrentModal;
    }
  }, [modal, error]);
  return {
    isOpen,
    closeModal,
    currentModal,
  };
};
