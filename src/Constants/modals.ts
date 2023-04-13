import { PageLoader } from '../Components/Dumb/PageLoader/PageLoader';
import BinanceFuture from '../Features/moleculs/Modals/BinanceFuture';
import CancelModal from '../Features/moleculs/Modals/BinanceFuture/CancelModal/CancelModal';
import ConfirmationModal from '../Features/moleculs/Modals/ConfirmationModal/ConfirmationModal';
// import CancelModal from '../Features/moleculs/Modals/BinanceFuture/CancelModal/CancelModal';
import CryptoFuture from '../Features/moleculs/Modals/CryptoFuture/CryptoFuture';
import DetailsBinance from '../Features/moleculs/Modals/DetailsModal/DetailsBinanceFuture/DetailsBinance';
import DetaislCrypto from '../Features/moleculs/Modals/DetailsModal/DetailsCrypto/DetailsCrypto';
import DetailsNft from '../Features/moleculs/Modals/DetailsModal/DetailsNftFuture/DetailsNft';
import DetailsStock from '../Features/moleculs/Modals/DetailsModal/DetailsStock/DetailsStock';
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
    title: 'Your application is already under consideration',
    subtitle: 'Our support will contact you shortly',
    buttonText: 'Ok',
    outsideClose: true,
  },
};

export const ACTION_MODALS: Record<string, any> = {
  'home.cards.futures.title': BinanceFuture,
  'home.cards.nft.title': NftFuture,
  'home.cards.stock.title': StockFuture,
  'home.cards.crypto.title': CryptoFuture,
  'modals.success.details.binance': DetailsBinance,
  'modals.success.details.nft': DetailsNft,
  'modals.success.details.stock': DetailsStock,
  'modals.success.details.crypto': DetaislCrypto,
  'modals.cancel.order': CancelModal,
  'modals.confirmation': ConfirmationModal,
  'loader.gooo': PageLoader,
};

export const DETAILS_MODAL: Record<string, any> = {
  crypto: DetaislCrypto,
  nft: DetailsNft,
  stock: DetailsStock,
  binance: DetailsBinance,
};
