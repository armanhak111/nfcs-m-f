import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useMediaQuery from 'react-use-media-query-hook';

import ArrowSvg from '../../../Assets/Icons/ArrowSvg';
import HeaderCoinSvg from '../../../Assets/Icons/HeaderCoinSvg';
import UserIconSvg from '../../../Assets/Icons/UserIconSvg';
import { DASHBOARD_SLIDES } from '../../../Constants/dashboard';
import { ROUTES } from '../../../Constants/Routes';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import { useOutsideDetect } from '../../../Hooks/useOutsideDetect';
import { getCurrentUser } from '../../../Store/Selectors/auth';
import { logout } from '../../../Store/Slices/auth';
import { setCurrentSlide } from '../../../Store/Slices/dashboardLocal';
import styles from './header.module.scss';

export const HeaderAuthView: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const user = useSelector(getCurrentUser);
  const handleOpen = () => {
    setOpen(!open);
  };
  const ref = useOutsideDetect(setOpen);
  const history = useHistory();
  const handleChangeSLide = (e: React.MouseEvent<HTMLDivElement>) => {
    history.push(ROUTES.DASHBOARD);
    dispatch(setCurrentSlide(e.currentTarget.dataset.current));
  };
  const isMobile = useMediaQuery(SCREENS.smallTablet);
  return (
    <div ref={ref}>
      <ul className={styles.headerAuthComponent}>
        <li className={styles.userItem} role="menuitem" onClick={handleOpen}>
          {Object.values(user).length > 0 && (
            <div className={styles.userInfoShort}>
              <span className={styles.userImageIcon}>
                <UserIconSvg />
              </span>
              <span className={styles.nameShort}>{user.name}</span>
              <span
                className={`${styles.userDropdownIcon} ${
                  open ? styles.userDropdownIconRotated : ''
                }`}
              >
                <ArrowSvg />
              </span>
            </div>
          )}
          <ul className={`${styles.userSubList} ${open ? styles.userSubListOpen : ''}`}>
            {isMobile && Object.values(user).length > 0 && (
              <li className={styles.cointListItem}>
                <div className={styles.cointItem}>
                  <span className={styles.cointIcon}>
                    <HeaderCoinSvg />
                  </span>
                  {user.upt} UPT
                </div>
              </li>
            )}

            <li>
              <span
                className={styles.userSubLink}
                onClick={handleChangeSLide}
                data-current={DASHBOARD_SLIDES.settings}
              >
                Custom Settings
              </span>
            </li>
            <li onClick={() => dispatch(logout())}>
              <span className={styles.userSubLink}>Log Out</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};
