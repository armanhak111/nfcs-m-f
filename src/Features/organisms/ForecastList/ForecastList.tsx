import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

// import CryptoSvg from '../../../Assets/Icons/forecast/Crypto';
// import BinanceSvg from '../../../Assets/Icons/forecast/BinanceSvg';
import NftSvg from '../../../Assets/Icons/forecast/NftSvg';
// import StockSvg from '../../../Assets/Icons/forecast/StockSvg';
import TimeSvg from '../../../Assets/Icons/forecast/TimeSvg';
import { getCurrentUser } from '../../../Store/Selectors/auth';
import { usersAnalytics } from '../../../Store/Slices/auth';
import { setActionModal } from '../../../Store/Slices/modal';
import Button from '../../atoms/Button';
import ToolTip from '../../atoms/ToolTip';
import styles from './forecastList.module.scss';

const ForecastList: React.FC = () => {
  const dispatch = useDispatch();
  const curentUser = useSelector(getCurrentUser);
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
                  <div className={styles.readyCount}>2</div>
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
            <div className={styles.foreacstBodyItem}>
              <div className={styles.forecastBodyItemContent}>
                <div className={styles.bodyItem}>
                  <div className={styles.bodyRow}>
                    <div className={`${styles.customCol} ${styles.customColSmall}`}>
                      <div className={styles.bodyItemLeft}>
                        <div className={`${styles.leftItem} ${styles.leftItemTime}`}>
                          <p>
                            <TimeSvg />
                            Order<span> 06.Jan.2022</span>
                          </p>
                        </div>
                        <div className={`${styles.leftItem} ${styles.leftItemLogo}`}>
                          <p>
                            <NftSvg />
                            {/* <BinanceSvg /> */}
                            {/* <StockSvg /> */}
                            {/* <CryptoSvg /> */}
                            <span>Lorem Ipsum</span>
                            <p>
                              <small>Open Sea</small>
                            </p>
                          </p>
                        </div>
                        <div className={`${styles.leftItem} ${styles.leftItemBtns}`}>
                          <span
                            className={styles.links}
                            onClick={() => dispatch(usersAnalytics(curentUser.id))}
                          >
                            Details
                          </span>
                          <span
                            className={styles.links}
                            onClick={() => dispatch(setActionModal('modals.cancel.order'))}
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
            <div className={styles.foreacstBodyItem}>
              <div className={styles.forecastBodyItemContent}>
                <div className={styles.bodyItem}>
                  <div className={styles.bodyRow}>
                    <div className={`${styles.customCol} ${styles.customColSmall}`}>
                      <div className={styles.bodyItemLeft}>
                        <div className={`${styles.leftItem} ${styles.leftItemTime}`}>
                          <p>
                            <TimeSvg />
                            Order<span> 06.Jan.2022</span>
                          </p>
                        </div>
                        <div className={`${styles.leftItem} ${styles.leftItemLogo}`}>
                          <p>
                            <NftSvg />
                            <span>Lorem Ipsum</span>
                            <p>
                              <small>Open Sea</small>
                            </p>
                          </p>
                        </div>
                        <div className={`${styles.leftItem} ${styles.leftItemBtns}`}>
                          <span
                            className={styles.links}
                            onClick={() =>
                              dispatch(setActionModal('modals.success.details.crypto'))
                            }
                          >
                            Details
                          </span>
                          <span
                            className={styles.links}
                            onClick={() => dispatch(setActionModal('modals.cancel.order'))}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForecastList;
