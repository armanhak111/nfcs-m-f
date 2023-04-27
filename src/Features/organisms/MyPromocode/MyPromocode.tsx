import { useFormik } from 'formik';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from 'react-use-media-query-hook';

import CopySvg from '../../../Assets/Icons/promocode/CopySvg';
import CostSvg from '../../../Assets/Icons/promocode/CostSvg';
import ReferralLinkSvg from '../../../Assets/Icons/promocode/ReferralLinkSvg';
import TotoalUpcomeSvg from '../../../Assets/Icons/promocode/TotoalUpcomeSvg';
import WaterFallSvg from '../../../Assets/Icons/promocode/WaterFallSvg';
import { MY_PROMO_CODE_NAME } from '../../../Constants/dashboard';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import { getCurrentUser } from '../../../Store/Selectors/auth';
import { setErrorMessage } from '../../../Store/Slices/modal';
import { nameMyPromoCode } from '../../../Utils/validations';
import Button from '../../atoms/Button';
import Input from '../../atoms/Input';
import styles from './myPromocode.module.scss';

const MyPromocode: React.FC = () => {
  const isTablet = useMediaQuery(SCREENS.tablet);
  const onlyTablet = useMediaQuery(SCREENS.onlyTablet);
  const smallTablet = useMediaQuery(SCREENS.smallTablet);
  const user = useSelector(getCurrentUser);
  const dispach = useDispatch();

  const formik = useFormik({
    initialValues: MY_PROMO_CODE_NAME,
    validationSchema: nameMyPromoCode,
    onSubmit: () => {
      console.log('ye');
    },
  });
  const copy = () => {
    navigator.clipboard.writeText('0x85E74fA...A8K94E1Ed6468Ce');
  };
  return (
    <section>
      <h2 className="title dashboard-title">My Promocode</h2>
      <div className="section_inner promocodeSection_inner">
        <div className={styles.promocoSection}>
          <div className={styles.promocodeRow}>
            <div className={`${styles.promocodeCol} col_`}>
              <div className={styles.promocodeItem}>
                <div className={styles.UPTCount}>
                  <div className={styles.Logo}>
                    <TotoalUpcomeSvg />
                  </div>
                  <div className={styles.Content}>
                    <p className={styles.Count}>{user.upt} UPT</p>
                    <p className={styles.Text}>Total upcome UTP</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.promocodeCol} col_`}>
              <div className={styles.promocodeItem}>
                <div className={styles.UPTCount}>
                  <div className={styles.Logo}>
                    <WaterFallSvg />
                  </div>
                  <div className={styles.Content}>
                    <p className={styles.Count}>0 UPT</p>
                    <p className={styles.Text}>Total upcome UTP from shared users</p>
                  </div>
                </div>
              </div>
            </div>
            <div className={`${styles.promocodeCol} col_`}>
              <div className={styles.promocodeItem}>
                <div className={styles.UPTCount}>
                  <div className={styles.Logo}>
                    <CostSvg />
                  </div>
                  <div className={styles.Content}>
                    <p className={styles.Count}>0 UPT</p>
                    <p className={styles.Text}>Total spent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.promocodeRowBody}>
            <div className={`${styles.promocodeCol} ${!onlyTablet ? 'col_' : ''}`}>
              {smallTablet && (
                <div className={styles.poromocodeMobileTopView}>
                  <div className={styles.promocodeMobilTopHeader}>
                    <div className={styles.reffrealLinkInfoLogo}>
                      <ReferralLinkSvg />
                    </div>
                    <div className={styles.reffrealLinkInfo}>
                      <p className={styles.refferalLink}>0x85E74fA...A8K94E1Ed6468Ce</p>
                      <p className={styles.refferealLinkText}>Your Referral Link</p>
                    </div>
                    <div className={styles.linkCopy}>
                      <button onClick={copy} type="button">
                        <CopySvg />
                      </button>
                    </div>
                  </div>

                  <div className={styles.promocodeForm}>
                    <Input
                      htmlFor="name"
                      type="text"
                      name="name"
                      placeHolder="contactus.name"
                      label="contactus.name"
                      onClick={formik.setFieldTouched}
                      onFocus={formik.setFieldTouched}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <Button
                      onClick={() => dispach(setErrorMessage('modals.error.needBuyAnalytic'))}
                      type="primary"
                      customClass={styles.promocodeBtn}
                      id="Send"
                      disabeled={Boolean(!formik.touched.name)}
                    />
                  </div>
                </div>
              )}
              {onlyTablet && (
                <div className="col_">
                  <div className={styles.poromocodeMobileTopView}>
                    <div className={styles.promocodeMobilTopHeader}>
                      <div className={styles.reffrealLinkInfoLogo}>
                        <ReferralLinkSvg />
                      </div>
                      <div className={styles.reffrealLinkInfo}>
                        <p className={styles.refferalLink}>0x85E74fA...A8K94E1Ed6468Ce</p>
                        <p className={styles.refferealLinkText}>Your Referral Link</p>
                      </div>
                      <div className={styles.linkCopy}>
                        <button onClick={copy} type="button">
                          <CopySvg />
                        </button>
                      </div>
                    </div>

                    <div className={styles.promocodeForm}>
                      <Input
                        htmlFor="name"
                        type="text"
                        name="name"
                        placeHolder="contactus.name"
                        label="contactus.name"
                        onClick={formik.setFieldTouched}
                        onFocus={formik.setFieldTouched}
                        onChange={formik.handleChange}
                        value={formik.values.name}
                      />
                      <Button
                        onClick={() => dispach(setErrorMessage('modals.error.needBuyAnalytic'))}
                        type="primary"
                        customClass={styles.promocodeBtn}
                        id="Send"
                        disabeled={Boolean(!formik.touched.name)}
                      />
                    </div>
                  </div>
                </div>
              )}
              {!onlyTablet && (
                <div className={`${styles.promocodeItem} ${styles.promocodeItemBig}`}>
                  <ul className={styles.promocodeLeftList}>
                    {!isTablet && (
                      <li>
                        <div className={styles.reffrealLinkInfoLogo}>
                          <ReferralLinkSvg />
                        </div>
                        <div className={styles.reffrealLinkInfo}>
                          <p className={styles.refferalLink}>0x85E74fA...A8K94E1Ed6468Ce</p>
                          <p className={styles.refferealLinkText}>Your Referral Link</p>
                        </div>
                        <div className={styles.linkCopy}>
                          <button onClick={copy} type="button">
                            <CopySvg />
                          </button>
                        </div>
                      </li>
                    )}
                    <li>
                      <div className={styles.reffrealLinkInfoLeft}>
                        <p className={styles.refferealLinkText}>
                          You currently have no invited users
                        </p>
                        {/* <ol className={styles.sponsorsList}>
                          <li>
                            <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                          </li>
                          <li>
                            <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                          </li>
                          <li>
                            <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                          </li>
                          <li>
                            <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                          </li>
                          <li>
                            <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                          </li>
                          <li>
                            <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                          </li>
                        </ol> */}
                      </div>
                    </li>
                  </ul>
                </div>
              )}
              {onlyTablet && (
                <div className="col_">
                  <div className={`${styles.promocodeItem} ${styles.promocodeItemBig}`}>
                    <ul className={styles.promocodeLeftList}>
                      {/* {!isTablet && (
                        <li>
                          <div className={styles.reffrealLinkInfoLogo}>
                            <ReferralLinkSvg />
                          </div>
                          <div className={styles.reffrealLinkInfo}>
                            <p className={styles.refferalLink}>0x85E74fA...A8K94E1Ed6468Ce</p>
                            <p className={styles.refferealLinkText}>
                              Your Referral Link 888888888888888888
                            </p>
                          </div>
                          <div className={styles.linkCopy}>
                            <button type="button">
                              <CopySvg />
                            </button>
                          </div>
                        </li>
                      )} */}
                      <li>
                        <div className={styles.reffrealLinkInfoLeft}>
                          <p className={styles.refferealLinkText}>
                            You currently have no invited users
                          </p>
                          {/* <ol className={styles.sponsorsList}>
                            <li>
                              <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                            </li>
                            <li>
                              <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                            </li>
                            <li>
                              <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                            </li>
                            <li>
                              <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                            </li>
                            <li>
                              <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                            </li>
                            <li>
                              <p>0x85E74fA...A8K94E1Ed6468Ce</p>
                            </li>
                          </ol> */}
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </div>
            {!onlyTablet && !isTablet && (
              <div className={`${styles.promocodeCol} col_`}>
                <div className={`${styles.promocodeItem} ${styles.promocodeItemBig}`}>
                  <div className={styles.promocodeForm}>
                    <Input
                      htmlFor="name"
                      type="text"
                      name="name"
                      placeHolder="contactus.name"
                      label="contactus.name"
                      onClick={formik.setFieldTouched}
                      onFocus={formik.setFieldTouched}
                      onChange={formik.handleChange}
                      value={formik.values.name}
                    />
                    <Button
                      onClick={() => dispach(setErrorMessage('modals.error.needBuyAnalytic'))}
                      type="primary"
                      customClass={styles.promocodeBtn}
                      id="Send"
                      disabeled={Boolean(!formik.touched.name)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyPromocode;
