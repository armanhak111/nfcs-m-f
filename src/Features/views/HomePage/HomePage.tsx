import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import useMediaQuery from 'react-use-media-query-hook';

import bgDesktop from '../../../Assets/images/full-bg.png';
import bgMobile from '../../../Assets/images/fulll-bg-mobile.png';
import Portal from '../../../Components/Dumb/Portal';
import { ROUTES } from '../../../Constants/Routes';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import { getCurrentUser } from '../../../Store/Selectors/auth';
import Button from '../../atoms/Button';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import HowItWorks from '../../moleculs/HowItWorks';
import WhyWe from '../../moleculs/WhyWe';
import HomeCards from '../../organisms/HomeCards';
import MainContent from '../../organisms/MainContent';
import styles from './HomePage.module.scss';

const HomePage: React.FC = () => {
  const history = useHistory();
  const currentUser = useSelector(getCurrentUser);

  const isAuth = Object.values(currentUser).length;
  const buyForecast = () => {
    if (isAuth) {
      history.push(ROUTES.DASHBOARD);
    } else {
      history.push(ROUTES.SIGN_IN);
    }
  };
  const isTablet = useMediaQuery(SCREENS.bigTablet);
  return (
    <div
      className="page mainPage"
      style={{
        backgroundImage: `${isTablet ? `url(${bgMobile})` : `url(${bgDesktop})`}`,
      }}
    >
      <Header />
      <MainContent>
        <Portal />
        <section className={styles.whyWeSection} id="navbar.whyWe">
          <WhyWe />
        </section>
        <section className={styles.cardsSection}>
          <HomeCards />
        </section>
        <section className={styles.discountSection}>
          <div className="container">
            <div className={styles.discountMain}>
              <div className={styles.discrountItem}>
                <h2 className={`${styles.discountTitle} title`}>
                  <span>50%</span> Discount!
                </h2>
                <p className={styles.discountText}>
                  Buy your first analytics and get a discount on the next one, you can also refer a
                  friend and get UPT
                </p>
                <Button
                  type="primary"
                  customClass={styles.discountBtn}
                  defaultMessage=" Buy Forecast"
                  onClick={buyForecast}
                  id="Buy Forecast"
                />
              </div>
            </div>
          </div>
        </section>
        <section className={styles.howItWorksSection} id="navbar.howitworks">
          <HowItWorks />
        </section>
        <section className={styles.uptSection} id="UPT">
          <div className="container">
            <div className={styles.uptContainer}>
              <div className={styles.uptSectionHeader}>
                <h2 className={`${styles.uptTitle} title`}>
                  What is <span>UPT</span> & How to Get?
                </h2>
                <p className={styles.uptSubtext}>
                  In the world of innovations we are coordinating your knowledge and skills to
                  discover yourself the right place for investing.
                </p>
              </div>
              <div className={styles.uptSectionBody}>
                <div className={styles.uptSectionRow}>
                  <div className={`${styles.uptSectionRowCol} col_`}>
                    <div className={styles.uptSectionItem}>
                      <h3 className={styles.uptSectionTitle}>
                        Get <span>10 UPT</span>
                      </h3>
                      <p className={styles.uptSectionText}>
                        When you shared user registered and activated account.
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.uptSectionRowCol} col_`}>
                    <div className={styles.uptSectionItem}>
                      <h3 className={styles.uptSectionTitle}>
                        Get <span>25 UPT</span>
                      </h3>
                      <p className={styles.uptSectionText}>When your shared user buy analytics.</p>
                    </div>
                  </div>
                  <div className={`${styles.uptSectionRowCol} col_`}>
                    <div className={styles.uptSectionItem}>
                      <h3 className={styles.uptSectionTitle}>
                        Get <span>30 UPT</span>
                      </h3>
                      <p className={styles.uptSectionText}>
                        When you buy analytics with <span>Promocode</span>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.uptSectionBtn}>
                <Button
                  type="primary"
                  onClick={buyForecast}
                  customClass={styles.cardBtn}
                  id="Get"
                />
              </div>
            </div>
          </div>
        </section>
      </MainContent>
      <Footer />
    </div>
  );
};

export default HomePage;
