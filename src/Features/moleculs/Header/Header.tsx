import { motion } from 'framer-motion';
import React, { useCallback, useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
// import { useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { useHistory } from 'react-router-dom';
import useMediaQuery from 'react-use-media-query-hook';

// import ArrowSvg from '../../../Assets/Icons/ArrowSvg';
import HeaderCoinSvg from '../../../Assets/Icons/HeaderCoinSvg';
import Logo from '../../../Assets/images/logo.svg';
import { ROUTES } from '../../../Constants/Routes';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import { usePositions } from '../../../Hooks/usePositions';
import { getCurrentUser } from '../../../Store/Selectors/auth';
// import { getCurrentLocale } from '../../../Store/Selectors/main';
// import { setLocale } from '../../../Store/Slices/mainSlice';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import { LOGO_ITEM, NAV_BAR } from '../conastantsMolecul';
import { TNavBar } from '../typesMolecules';
import styles from './header.module.scss';
import { HeaderAuthView } from './headerAuthView';

const Header: React.FC = () => {
  // const currentLocalce = useSelector(getCurrentLocale);
  const [burger, setBurger] = useState(false);
  const history = useHistory();
  const location = useLocation();
  const currentUser = useSelector(getCurrentUser);

  // const dispatch = useDispatch();
  const isAuth = Object.values(currentUser).length;
  const { currentRef, scrollPosition } = usePositions();
  const currNavBarItems = useMemo(() => {
    return NAV_BAR.filter((curr) => {
      if (isAuth) {
        return curr.path !== ROUTES.SIGN_IN;
      } else {
        return curr.path !== ROUTES.DASHBOARD;
      }
    });
  }, [isAuth]);
  const isBigTablet = useMediaQuery(SCREENS.bigTablet);
  const isOnlyTablet = useMediaQuery(SCREENS.onlyTablet);

  const changePage = useCallback(
    async (currentItem: TNavBar) => {
      const distanceToTop = document.getElementById('header')?.clientHeight;
      if (burger) {
        await setBurger(false);
      }
      if (location.pathname !== currentItem.path) {
        await history.push(currentItem.path);
      }

      if (currentItem.path === ROUTES.HOME) {
        if (currentItem.id) {
          const scrolledItem = document.getElementById(currentItem.id)?.offsetTop;
          if (scrolledItem && distanceToTop) {
            window.scrollTo({
              top: scrolledItem - distanceToTop - 10,
              behavior: 'smooth',
            });
          }
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      }
    },
    [location, burger]
  );

  return (
    <header
      ref={currentRef}
      className={`${styles.header} ${scrollPosition > 0 && styles.scrolled}`}
      id="header"
    >
      <div className="container">
        <nav className={styles.nav}>
          <div className={styles.headerLogo} onClick={() => changePage(LOGO_ITEM)}>
            <img src={Logo} alt="Logo" />
          </div>
          <menu className={`${styles.headerMenu} ${burger && styles.active}`}>
            <ul className={styles.headerMenuList}>
              {currNavBarItems.map((currentItem: TNavBar) => {
                return (
                  <motion.li transition={{ type: 'spring', stiffness: 30 }} key={currentItem.id}>
                    <Typography
                      onClick={() => changePage(currentItem)}
                      component={'span'}
                      className={`${styles.headerMenuLink} ${
                        currentItem.className && styles[currentItem.className]
                      }`}
                      id={currentItem.id}
                      key={currentItem.id}
                    />
                  </motion.li>
                );
              })}
              <>
                {!isBigTablet && (
                  <li>
                    <HeaderAuthView />
                  </li>
                )}
              </>
              {!isAuth ? (
                <li>
                  <Button
                    type="secondary"
                    id="navbar.signup"
                    className={`${styles.headerMenuLink} ${styles.signupBtn}`}
                    onClick={() => history.push(ROUTES.SIGN_UP)}
                  />
                </li>
              ) : (
                <>
                  {!isBigTablet && isAuth && (
                    <li>
                      <div className={styles.cointItem}>
                        <span className={styles.cointIcon}>
                          <HeaderCoinSvg />
                        </span>
                        {currentUser.upt}
                      </div>
                    </li>
                  )}
                </>
              )}

              {/* <li>
                <span className={styles.headerMenuLink}>
                  {currentLocalce.toLocaleUpperCase()}
                  <span className={styles.iconWrapper}>
                    <ArrowSvg />
                  </span>
                </span>
                <ul className={styles.langSubList}>
                  {LANGUAGES.map((currentLang: TLanguages) => {
                    return (
                      <li key={currentLang.code}>
                        <Typography
                          onClick={() => dispatch(setLocale(currentLang.code))}
                          component={'span'}
                          className={`${styles.langSubListLink} ${
                            currentLocalce === currentLang.code && styles.selected
                          }`}
                          defaultMessage={currentLang.title}
                        />
                      </li>
                    );
                  })}
                </ul>
              </li> */}
            </ul>
          </menu>

          <div className={styles.burgerFullContainer}>
            {isBigTablet && (
              <div className={styles.tabletItem}>
                <HeaderAuthView />
                <>
                  {isOnlyTablet && isAuth > 0 && (
                    <div className={styles.cointItem}>
                      <span className={styles.cointIcon}>
                        <HeaderCoinSvg />
                      </span>
                      {currentUser.upt}
                    </div>
                  )}
                </>
              </div>
            )}
            <div
              onClick={() => setBurger(!burger)}
              className={`${styles.headerBurger} ${burger && styles.active}`}
            >
              <div className={styles.burgerIcon} />
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
