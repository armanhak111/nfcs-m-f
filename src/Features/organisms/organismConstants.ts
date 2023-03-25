import BinanceFutureSvg from '../../Assets/Icons/cards/BinanceFutureSvg';
import BondDisabledSvg from '../../Assets/Icons/cards/BondDisabledSvg';
// import BondDisabledSvg from '../../Assets/Icons/cards/BondDisabledSvg';
import CryptoSvg from '../../Assets/Icons/cards/CryptoSvg';
import CurrencySvg from '../../Assets/Icons/cards/CurrencySvg';
import NftSvg from '../../Assets/Icons/cards/NftSvg';
import StockSvg from '../../Assets/Icons/cards/StockSvg';
import { THomeCards } from './organismsTypes';

export const HOME_CARDS: THomeCards[] = [
  {
    icon: BinanceFutureSvg,
    title: 'home.cards.futures.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
    hoverEffect: 'cardItemBinance',
  },
  {
    icon: NftSvg,
    title: 'home.cards.nft.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
    hoverEffect: 'cardItemNft',
  },
  {
    icon: StockSvg,
    title: 'home.cards.stock.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
    hoverEffect: 'cardItemStock',
  },
  {
    icon: CryptoSvg,
    title: 'home.cards.crypto.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
    hoverEffect: 'cardItemCrypto',
  },
  // {
  //   icon: BondDisabledSvg,
  //   title: 'home.cards.crypto.title',
  //   info: 'home.cards.futures.text',
  //   price: 750,
  //   saledPrice: 1500,
  //   buttonText: 'home.cards.buttonText',
  //   hoverEffect: 'cardItemDisabled',
  // },
  // {
  //   icon: BondDisabledSvg,
  //   title: 'home.cards.crypto.title',
  //   info: 'home.cards.futures.text',
  //   price: 750,
  //   saledPrice: 1500,
  //   buttonText: 'home.cards.buttonText',
  //   hoverEffect: 'cardItemDisabled',
  // },
];

export const DAHBOARD_CARDS: THomeCards[] = [
  {
    icon: BinanceFutureSvg,
    title: 'home.cards.futures.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
    hoverEffect: 'cardItemBinance',
  },
  {
    icon: NftSvg,
    title: 'home.cards.nft.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
    hoverEffect: 'cardItemNft',
  },
  {
    icon: StockSvg,
    title: 'home.cards.stock.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
    hoverEffect: 'cardItemStock',
  },
  {
    icon: CryptoSvg,
    title: 'home.cards.crypto.title',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
    hoverEffect: 'cardItemCrypto',
  },
  {
    icon: BondDisabledSvg,
    title: 'Bond',
    info: 'home.cards.futures.text',
    price: 1000,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
    hoverEffect: 'cardItemDisabled',
  },
  {
    icon: CurrencySvg,
    title: 'Currency',
    info: 'home.cards.futures.text',
    price: 750,
    saledPrice: 1500,
    buttonText: 'home.cards.buttonText',
    hoverEffect: 'cardItemDisabled',
  },
];
