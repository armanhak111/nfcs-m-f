import React, { useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';
import useMediaQuery from 'react-use-media-query-hook';

import LongArrow from '../../../Assets/Icons/LongArrow';
import WebLongArrow from '../../../Assets/Icons/WebLongArrow';
import { DESCRIPTIONS, TDescriptions } from '../../../Constants/descriptions';
import { ROUTES } from '../../../Constants/Routes';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import MainContent from '../../organisms/MainContent';
import styles from './currentAnalytic.module.scss';

const CurrentAnalytic: React.FC = () => {
  const isTablet = useMediaQuery(SCREENS.bigTablet);
  const history = useHistory();
  const Component = useMemo(() => {
    const current = history.location.pathname.split('/')[2];
    const currentIcon = DESCRIPTIONS.find((element: TDescriptions) => element.current === current);
    return currentIcon?.icon;
  }, []);
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  const text = useMemo(() => {
    const current = history.location.pathname.split('/')[2];
    const currentIcon = DESCRIPTIONS.find((element: TDescriptions) => element.current === current);
    return currentIcon;
  }, []);

  return (
    <div className={`${styles.analyticPage} current-analytic-page page`}>
      <Header />
      <MainContent>
        <section className={styles.analyticSeciton}>
          <div className="container">
            <>
              <div onClick={() => history.push(ROUTES.HOME)} className={styles.goBackItem}>
                {isTablet ? <LongArrow /> : <WebLongArrow />}
                <p>Back</p>
              </div>
            </>
            <div className={`${styles.analyticRow} row`}>
              <div className={`${styles.analyticLeftCol} col_left`}>
                <div className={styles.analyticLeftColContent}>{Component && <Component />}</div>
              </div>
              <div className={`${styles.analyticRightCol} col_right`}>
                <div className={styles.rightInner}>
                  <div className={styles.rightItem}>
                    <h3 className={`${styles.itemTitle} title`}>{text?.title}</h3>
                    <p className={styles.itemText}>{text?.text}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </MainContent>
      <Footer />
    </div>
  );
};

export default CurrentAnalytic;
