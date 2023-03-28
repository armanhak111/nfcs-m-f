import BinanceFuture from '../Features/moleculs/Modals/BinanceFuture';
import CryptoFuture from '../Features/moleculs/Modals/CryptoFuture/CryptoFuture';
import NftFuture from '../Features/moleculs/Modals/NftFuture/NftFuture';
import StockFuture from '../Features/moleculs/Modals/StockFuture/StockFuture';

type TModals = {
  type: 'error' | 'success';
  title: string;
  subtitle: string;
  buttonText: string;
  id: string;
  outsideClose?: boolean;
};

export type TModalVariantsSuccess =
  | 'change-password'
  | 'forgot-password-success'
  | 'reset-password-success'
  | 'contact-success-modal';

export const MODALS: Record<TModalVariantsSuccess, TModals> = {
  ['change-password']: {
    id: 'change-password',
    type: 'success',
    title: 'modals.success.changePassword.title',
    subtitle: 'modals.success.changePassword.subTitle',
    buttonText: 'modals.success.changePassword.button',
  },
  ['forgot-password-success']: {
    id: 'forgot-password-success',
    type: 'success',
    title: 'modals.success.forgotPassword.title',
    subtitle: 'modals.success.forgotPassword.subTitle',
    buttonText: 'modals.success.forgotPassword.button',
    outsideClose: true,
  },
  ['reset-password-success']: {
    id: 'reset-password-success',
    type: 'success',
    title: 'modals.success.resetPass.title',
    subtitle: 'modals.success.resetPass.subTitle',
    buttonText: 'modals.success.resetPass.button',
    outsideClose: true,
  },
  ['contact-success-modal']: {
    id: 'contact-success-modal',
    type: 'success',
    title: 'axper jan',
    subtitle: 'button.text',
    buttonText: 'Ok',
    outsideClose: true,
  },
};

export const ACTION_MODALS: Record<string, any> = {
  'home.cards.futures.title': BinanceFuture,
  'home.cards.nft.title': NftFuture,
  'home.cards.stock.title': StockFuture,
  'home.cards.crypto.title': CryptoFuture,
};
