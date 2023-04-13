import React from 'react';

import BinanceFutureBigSvg from '../Assets/Icons/BinanceFutureBigSvg';
import CryptoBigSvg from '../Assets/Icons/CryptoBigSvg';
import NftBigSvg from '../Assets/Icons/NftBigSvg';
import StockBigSvg from '../Assets/Icons/StockBigSvg';

export type TDescriptions = {
  current: string;
  icon: React.FC;
  text: string;
  title: string;
};

export const DESCRIPTIONS: TDescriptions[] = [
  {
    current: 'stock',
    title: 'Stock',
    icon: StockBigSvg,
    text: 'Penny stock - also known as <<junk, off-exchange>> stocks - stocks of small companies that are traded at low prices. Historically, it was considered such securities worth less than 1$, but the latest definition of the US Securities and Exchange Commission (SEC) includes stocks worth less than 5$ in this category. In any successful investment strategy, it is important to have enough information to make reasonable decision. For such stocks, information is much more difficult to find as compared to well-known companies. Companies whose shares are traded on the OTCBB file financial statements to SEC. However, the companies present on the OTC Markets Group platform in majority are not required to file reports to SEC. Thus, they do not get such public control and are not regulated like stocks listed on the NYSE, Nasdaq and other markets.',
  },
  {
    current: 'nft',
    icon: NftBigSvg,
    title: 'NFT',
    text: 'NFT, or non-fungible token, is a unit of account with which a digital impression is created for any unique item. Among them can be: paintings, photos, videos, music, gifs - in a word, any content that claims to be at least some kind of uniqueness. They are highly prized among collectors, gamers and art lovers and are bought and sold through auctions.',
  },
  {
    current: 'futures',
    icon: BinanceFutureBigSvg,
    title: 'Binance Futures',
    text: 'Futures contracts or crypto futures are financial derivatives, contracts for buying or selling an asset at a predetermined time and price. As in case of margin trading, stocks, commodities, and cryptocurrencies can act as assets. On the expiration date of the futures (the date of expiration of the contract) the parties must fulfill their obligations regardless of the market price of the purchase at that time. Unlike spot and margin trading, when trading futures, a trader who is not the direct holder of an asset can open long or short positions. If you have a futures contract, you do not need to own an asset in order to speculate on its price. By trading derivative financial instruments, you can protect yourself in the event of a fall in the price of an asset and protect your wallet from high market volatility. ',
  },
  {
    current: 'crypto',
    icon: CryptoBigSvg,
    title: 'Crypto',
    text: 'Cryptocurrency trading is speculation on the price movement of a cryptocurrency through a trading account with a contract for difference (CFD) or buying and selling coins through an exchange. Simply put, you are actively trading cryptocurrencies for profit using various tools. An example of technical analysis of charts is the TradingView service. CFD trading is a type of derivative that allows you to bet on the changes in the price of a cryptocurrency without owning the currency itself. For example, you can open long position (buy), if you think the value of a cryptocurrency will rise, or fall shortly.',
  },
];
