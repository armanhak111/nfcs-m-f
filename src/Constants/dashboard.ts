import React from 'react';

import BuyAnalytic from '../Features/organisms/BuyAnalytic';
import ForecastList from '../Features/organisms/ForecastList';
import MyPromocode from '../Features/organisms/MyPromocode';
import Settings from '../Features/organisms/Settings';

export const DASHBOARD_SLIDES = {
  buyAnalytic: 'buyAnalytic',
  forecastList: 'forecastList',
  myPromocode: 'myPromocode',
  settings: 'settings',
};

export const DASHBOARD: Record<string, React.FC> = {
  buyAnalytic: BuyAnalytic,
  forecastList: ForecastList,
  myPromocode: MyPromocode,
  settings: Settings,
};
export type TBinanceOrder = {
  incuiryType: string;
  adjustLeverage: string;
  sumType: string;
  minPrice: string;
  maxPrice: string;
  timeZone: string;
};
export const BINANCE_FUTURE_ORDER: any = {
  incuiryType: '',
  adjustLeverage: '20',
  sumType: 'USD',
  minPrice: '',
  maxPrice: '',
  timeZone: '',
};

export type TNftOrder = {
  platform: string;
  type: string;
  sumType: string;
  minPrice: string;
  maxPrice: string;
};

export const NFT_FUTURE_ORDER: TNftOrder = {
  platform: '',
  type: '',
  sumType: 'USD',
  minPrice: '',
  maxPrice: '',
};

export type TStock = {
  industry: string;
  sumType: string;
  minPrice: string;
  maxPrice: string;
};

export const STOCK_FUTURE_ORDER: TStock = {
  industry: '',
  sumType: 'USD',
  minPrice: '',
  maxPrice: '',
};

export type TCrypto = {
  sumType: string;
  minPrice: string;
  maxPrice: string;
};

export const CRYPTO_FUTURE_ORDER: TCrypto = {
  sumType: 'USD',
  minPrice: '',
  maxPrice: '',
};

export type TNamePromo = {
  name: string;
};
export const MY_PROMO_CODE_NAME: TNamePromo = {
  name: '',
};
