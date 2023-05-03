import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from 'react-use-media-query-hook';

import BuyForecastSvg from '../../../Assets/Icons/dashboard/BuyForecastSvg';
import CustomSettingsSvg from '../../../Assets/Icons/dashboard/CustomSettingsSvg';
import ForecastListSvg from '../../../Assets/Icons/dashboard/ForecastListSvg';
import MyPromoCodeSvg from '../../../Assets/Icons/dashboard/MyPromoCodeSvg';
import MenuFoldSvg from '../../../Assets/Icons/MenuFoldSvg';
import { DASHBOARD_SLIDES } from '../../../Constants/dashboard';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import { useOutsideDetect } from '../../../Hooks/useOutsideDetect';
import { getCurrentUser, getOrderDetails } from '../../../Store/Selectors/auth';
import { getDashboardCurrentSlide } from '../../../Store/Selectors/dashboardLocal';
import { usersAnalytics } from '../../../Store/Slices/auth';
import { setCurrentSlide } from '../../../Store/Slices/dashboardLocal';
import styles from './dashboardSideBar.module.scss';

interface IDashboardSideBar {
  open: boolean;
  // eslint-disable-next-line no-unused-vars
  setOpen: (arg: boolean) => void;
}

const DashboardSideBar: React.FC<IDashboardSideBar> = ({ open, setOpen }) => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const handleChangeSLide = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setCurrentSlide(e.currentTarget.dataset.current));
    if (open) {
      setOpen(!open);
    }
  };
  useEffect(() => {
    dispatch(usersAnalytics(currentUser.id));
  }, []);

  const ref = useOutsideDetect(setOpen);
  const handelOpen = () => {
    setOpen(!open);
  };
  const orderDetails = useSelector(getOrderDetails);
  const currentSLide = useSelector(getDashboardCurrentSlide);
  const onlyTablet = useMediaQuery(SCREENS.onlyTablet);
  return (
    <aside ref={ref} className={`${styles.aside} ${open && styles.opened} `}>
      <div className={styles.asideContent}>
        {onlyTablet && (
          <button onClick={handelOpen} className={styles.tabletOpener}>
            <MenuFoldSvg />
          </button>
        )}

        <ul className={styles.asideList}>
          <li className={styles.asideListItem}>
            <span
              onClick={handleChangeSLide}
              data-current={DASHBOARD_SLIDES.buyAnalytic}
              className={`${styles.asideListLink} ${
                currentSLide === DASHBOARD_SLIDES.buyAnalytic && styles.active
              }   `}
            >
              <BuyForecastSvg />
              <span className={`${styles.closedSidebar && open && styles.opened}  `}>
                Buy Analytic
              </span>
            </span>
          </li>
          <li className={styles.asideListItem}>
            <span
              onClick={handleChangeSLide}
              data-current={DASHBOARD_SLIDES.forecastList}
              className={`${styles.asideListLink} ${
                currentSLide === DASHBOARD_SLIDES.forecastList && styles.active
              }`}
            >
              <ForecastListSvg />
              <span className={`${styles.closedSidebar && open && styles.opened}  `}>
                Forecast List
              </span>
              <span
                className={`${styles.radyCount} ${styles.radyCountClosed && open && styles.opened}`}
              >
                {orderDetails.length}
              </span>
            </span>
          </li>
          <li className={styles.asideListDivider} />
          <li className={styles.asideListItem}>
            <span
              onClick={handleChangeSLide}
              data-current={DASHBOARD_SLIDES.myPromocode}
              className={`${styles.asideListLink} ${
                currentSLide === DASHBOARD_SLIDES.myPromocode && styles.active
              }`}
            >
              <MyPromoCodeSvg />
              <span className={`${styles.closedSidebar && open && styles.opened}  `}>
                My PromoCode
              </span>
            </span>
          </li>
          <li className={styles.asideListItem}>
            <span
              onClick={handleChangeSLide}
              data-current={DASHBOARD_SLIDES.settings}
              className={`${styles.asideListLink} ${
                currentSLide === DASHBOARD_SLIDES.settings && styles.active
              }`}
            >
              <CustomSettingsSvg />
              <span className={`${styles.closedSidebar && open && styles.opened}  `}>
                Custom Settings
              </span>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default React.memo(DashboardSideBar);
