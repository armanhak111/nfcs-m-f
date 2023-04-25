import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import CryptoSvg from '../../../Assets/Icons/forecast/Crypto';
// import BinanceSvg from '../../../Assets/Icons/forecast/BinanceSvg';
// import NftSvg from '../../../Assets/Icons/forecast/NftSvg';
// import StockSvg from '../../../Assets/Icons/forecast/StockSvg';
import TimeSvg from '../../../Assets/Icons/forecast/TimeSvg';
import { FORECAST_ICONS } from '../../../Constants/icons';
// import { DETAILS_MODAL } from '../../../Constants/modals';
import { getOrderDetails } from '../../../Store/Selectors/auth';
import { setCurrAnalyticId } from '../../../Store/Slices/auth';
// import { usersAnalytics } from '../../../Store/Slices/auth';
import { setActionModal } from '../../../Store/Slices/modal';
import Button from '../../atoms/Button';
import ToolTip from '../../atoms/ToolTip';
import styles from './forecastList.module.scss';

const ForecastList: React.FC = () => {
  const dispatch = useDispatch();
  // const curentUser = useSelector(getCurrentUser);
  const newOrderDetails = useSelector(getOrderDetails);
  const orderDetails = [...newOrderDetails].reverse();

  const getDetail = (item: any) => {
    dispatch(setCurrAnalyticId(item.analyticId));

    if (item.orderType === 'binance') {
      return dispatch(setActionModal('modals.success.details.binance'));
    } else if (item.orderType === 'nft') {
      return dispatch(setActionModal('modals.success.details.nft'));
    } else if (item.orderType === 'stock') {
      return dispatch(setActionModal('modals.success.details.stock'));
    } else if (item.orderType === 'crypto') {
      return dispatch(setActionModal('modals.success.details.crypto'));
    }
  };
  console.log(newOrderDetails);
  console.log(orderDetails, 'ditailssss');

  return (
    <section className={styles.buyForecastSection}>
      <h2 className="title dashboard-title">Forecast List</h2>
      <div className="section_inner forecastListSecton_inner">
        <div className={styles.forecastSection}>
          <div className={styles.forecastHeader}>
            <ul className={styles.forecasstChangers}>
              <li className="col_">
                <button type="button" className={styles.active}>
                  Wait List
                  <div className={styles.readyCount}>{orderDetails.length}</div>
                </button>
              </li>
              <li className="col_">
                <button type="button" className={styles.disabled}>
                  Ready Forecasts
                </button>
              </li>
              <li className="col_">
                <button type="button" className={styles.disabled}>
                  Your Forecasts
                </button>
              </li>
            </ul>
          </div>
          <div className={styles.forecastBody}>
            <p className={styles.waittimeInfo}>
              Max Wait Time: <span>1 Week</span>
            </p>
            {orderDetails.map((item: any) => {
              const getIcons = () => {
                const Icon = FORECAST_ICONS[item.orderType];
                return FORECAST_ICONS[item.orderType] ? <Icon /> : null;
              };

              return (
                <div key={item.analyticId} className={styles.foreacstBodyItem}>
                  <div className={styles.forecastBodyItemContent}>
                    <div className={styles.bodyItem}>
                      <div className={styles.bodyRow}>
                        <div className={`${styles.customCol} ${styles.customColSmall}`}>
                          <div className={styles.bodyItemLeft}>
                            <div className={`${styles.leftItem} ${styles.leftItemTime}`}>
                              <p>
                                <TimeSvg />
                                Order:{''}
                                <span>{item.date}</span>
                              </p>
                            </div>
                            <div className={`${styles.leftItem} ${styles.leftItemLogo}`}>
                              <p>
                                {/* <NftSvg /> */}
                                {getIcons()}
                                {/* <BinanceSvg /> */}
                                {/* <StockSvg /> */}
                                {/* <CryptoSvg /> */}
                                <span>{item.orderType.toUpperCase()}</span>
                                <p>
                                  <small>
                                    {item.orderCategory ? item.orderCategory : '_ _ _ _'}
                                  </small>
                                </p>
                              </p>
                            </div>
                            <div className={`${styles.leftItem} ${styles.leftItemBtns}`}>
                              <span
                                className={styles.links}
                                onClick={() => dispatch(getDetail(item))}
                              >
                                Details
                              </span>
                              <span
                                className={styles.links}
                                onClick={() => {
                                  dispatch(setCurrAnalyticId(item.analyticId));
                                  dispatch(setActionModal('modals.cancel.order'));
                                }}
                              >
                                Cancel
                              </span>
                            </div>
                          </div>
                        </div>
                        <div className={`${styles.customCol} ${styles.customColBig}`}>
                          <div className={styles.bodyItemRight}>
                            <div className={`${styles.stepBarItem} ${styles.stepBarItemFull}`}>
                              <div className={styles.stepBarRow}>
                                <div className={styles.stepBarRowItem}>
                                  <div className={styles.stepBarInner}>
                                    <p>Order</p>
                                  </div>
                                </div>
                                <div className={styles.stepBarRowItemBig}>
                                  <div className={styles.stepBarInner}>
                                    <p>Pending</p>
                                  </div>
                                </div>
                                <div className={styles.stepBarRowItem}>
                                  <div className={styles.stepBarInner}>
                                    <p>Done</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.forecastBtns}>
                              <div className={styles.btnParent}>
                                <Button
                                  type="primary"
                                  disabeled
                                  id="Buy With Crypto"
                                  className={`${styles.forcastBtn} ${styles.forcesastBtnPrimary}`}
                                ></Button>
                              </div>
                              <div className={styles.btnParent}>
                                <Button
                                  type="secondary"
                                  disabeled
                                  id="Buy With 33$"
                                  className={`${styles.forcastBtn} ${styles.forcesastBtnSecondary}`}
                                ></Button>
                              </div>
                              <div className={styles.btnParent}>
                                <Button
                                  type="secondary"
                                  disabeled
                                  id="Buy With UPT"
                                  className={`${styles.forcastBtn} ${styles.forcesastBtnSecondary}`}
                                ></Button>
                                <ToolTip
                                  isForecastList
                                  text="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
                                  isOpen={false}
                                />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForecastList;
