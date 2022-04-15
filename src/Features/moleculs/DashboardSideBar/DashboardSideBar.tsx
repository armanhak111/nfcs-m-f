import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import useMediaQuery from 'react-use-media-query-hook';

import BuyForecastSvg from '../../../Assets/Icons/dashboard/BuyForecastSvg';
import CustomSettingsSvg from '../../../Assets/Icons/dashboard/CustomSettingsSvg';
import ForecastListSvg from '../../../Assets/Icons/dashboard/ForecastListSvg';
import MyPromoCodeSvg from '../../../Assets/Icons/dashboard/MyPromoCodeSvg';
import MenuFoldSvg from '../../../Assets/Icons/MenuFoldSvg';
import { DASHBOARD_SLIDES } from '../../../Constants/dashboard';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import { getDashboardCurrentSlide } from '../../../Store/Selectors/dashboardLocal';
import { setCurrentSlide } from '../../../Store/Slices/dashboardLocal';
import styles from './dashboardSideBar.module.scss';

const DashboardSideBar: React.FC = () => {
  const dispatch = useDispatch();
  const handleChangeSLide = (e: React.MouseEvent<HTMLDivElement>) => {
    dispatch(setCurrentSlide(e.currentTarget.dataset.current));
  };
  const currentSLide = useSelector(getDashboardCurrentSlide);
  const onlyTablet = useMediaQuery(SCREENS.onlyTablet);
  return (
    <aside className={`${styles.aside}`}>
      <div className={styles.asideContent}>
        {onlyTablet && (
          <button className={styles.tabletOpener}>
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
              }`}
            >
              <BuyForecastSvg />
              <span className={styles.closedSidebar}>Buy Analytic</span>
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
              <span className={styles.closedSidebar}>Forecast List</span>
              <span className={`${styles.radyCount} ${styles.radyCountClosed}`}>2</span>
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
              <span className={styles.closedSidebar}>My PromoCode</span>
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
              <span className={styles.closedSidebar}>Custom Settings</span>
            </span>
          </li>
        </ul>
      </div>
    </aside>
  );
};

export default DashboardSideBar;
