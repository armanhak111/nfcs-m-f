import React from 'react';
import useMediaQuery from 'react-use-media-query-hook';

// import EnvelopeSvg from '../../../Assets/Icons/EnvelopeSvg';
// import FacebookSvg from '../../../Assets/Icons/FacebookSvg';
// import InstagramSvg from '../../../Assets/Icons/InstagramSvg';
import LocationSvg from '../../../Assets/Icons/LocationSvg';
import PhoneSvg from '../../../Assets/Icons/PhoneSvg';
// import TelegramSvg from '../../../Assets/Icons/TelegramSvg';
// import TwitterSvg from '../../../Assets/Icons/TwitterSvg';
// import WhatsAppSvg from '../../../Assets/Icons/WhatsAppSvg';
import tabletBg from '../../../Assets/images/about-tablet.png';
import bigBg from '../../../Assets/images/contact-about-bg.png';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import MainContent from '../../organisms/MainContent';
import styles from './AboutUs.module.scss';

const AboutUs: React.FC = () => {
  const isOnlyTablet = useMediaQuery(SCREENS.onlyTablet);
  const isMobile = useMediaQuery(SCREENS.mobile);
  return (
    <div
      className={`${styles.aboutPage} about-us-page page`}
      style={{
        backgroundImage: `${
          isOnlyTablet
            ? `url(${tabletBg})`
            : `url(${bigBg}), linear-gradient(170.79deg, #151a2c 0.37%, #120d20 93.02%)`
        }`,
      }}
    >
      <Header />
      <MainContent>
        <section className={styles.aboutUsSection} id="navbar.about">
          <div className="container">
            <div className={styles.aboutUsRow}>
              <div className={`${styles.col_left} col_50`}>
                <div className={styles.aboutUsInfo}>
                  <h1 className="title">About Us</h1>
                  <p className="subTitle">
                    Our culture reflects our philosophy of respect, simplify, and solve. Success is
                    a result of our talented and dedicated team who live and exemplify our
                    philosophy. The NFCS team expects great things of each other, treat each other
                    well, and are committed to creating the best analytic in the world.
                  </p>
                  <div className={styles.aboutUsContactContainer}>
                    <div className={styles.aboutUsContact}>
                      <p className={styles.contactItem}>
                        <span>
                          <LocationSvg />
                        </span>
                        VluchtelingenWerk Nederland, 15/1
                      </p>
                      <a href="tel:+18884521505" className={styles.contactItem}>
                        <span>
                          <PhoneSvg />
                        </span>
                        +1-888-452-1505
                      </a>
                    </div>
                    {/* <ul className={styles.aboutSocialList}>
                      <li>
                        <span>
                          <TelegramSvg />
                        </span>
                      </li>
                      <li>
                        <span>
                          <WhatsAppSvg />
                        </span>
                      </li>
                      <li>
                        <span>
                          <EnvelopeSvg />
                        </span>
                      </li>
                      <li>
                        <span>
                          <TwitterSvg />
                        </span>
                      </li>
                      <li>
                        <span>
                          <InstagramSvg />
                        </span>
                      </li>
                      <li>
                        <span>
                          <FacebookSvg />
                        </span>
                      </li>
                    </ul> */}
                  </div>
                </div>
              </div>
              <div className={`${styles.col_right} col_50`}>
                <>
                  {!isOnlyTablet ? (
                    <div className={styles.timelineContainer}>
                      <ul>
                        <li>
                          <div className={styles.timelineContent}>
                            <>
                              {isMobile ? (
                                <>
                                  <div className={styles.mobileDot} />
                                  <div className={styles.mobileLine} />
                                </>
                              ) : null}
                            </>
                            <h3 className={styles.timelineTitle}>V1 VAULTS:</h3>
                            <p className={styles.timelineText}>
                              More global scope analytics for Futures,Bond analytics Fund analytics.
                            </p>
                          </div>
                          <div className={styles.timelineDate}>
                            <p>Jan 2024</p>
                          </div>
                        </li>
                        <li>
                          <div className={styles.timelineContent}>
                            <>
                              {isMobile ? (
                                <>
                                  <div className={styles.mobileDot} />
                                  <div className={styles.mobileLine} />
                                </>
                              ) : null}
                            </>
                            <h3 className={styles.timelineTitle}>V2 VAULTS:</h3>
                            <p className={styles.timelineText}>
                              Our users will be able to create their own analytics.{' '}
                            </p>
                          </div>
                          <div className={styles.timelineDate}>
                            <p>March 2024</p>
                          </div>
                        </li>
                        <li>
                          <div className={styles.timelineContent}>
                            <>
                              {isMobile ? (
                                <>
                                  <div className={styles.mobileDot} />
                                  <div className={styles.mobileLine} />
                                </>
                              ) : null}
                            </>
                            <h3 className={styles.timelineTitle}>V3 VAULTS:</h3>
                            <p className={styles.timelineText}>
                              There will be a global platform where our users will sell their own
                              analytics after passing the review.{' '}
                            </p>
                          </div>
                          <div className={styles.timelineDate}>
                            <p>Sep 2024</p>
                          </div>
                        </li>
                        <div className={styles.bothClenar} />
                      </ul>
                    </div>
                  ) : (
                    <div className={styles.tabletTimeline}>
                      <div className={styles.tabletItemsTop}>
                        <div className={styles.tabletItemsRow}>
                          <div className={`${styles.tabletItem} col_33`}>
                            <div className={styles.tableItemBlock}>
                              <h2 className={styles.tableItemBlockTitle}>V1 VAULTS:</h2>
                              <p className={styles.tableItemBlockText}>
                                More global scope analytics for Futures,Bond analytics Fund
                                analytics.
                              </p>
                            </div>
                          </div>
                          <div className={`${styles.tabletItem} col_33`}>
                            <div className={styles.tableItemBlock}>
                              <h2 className={styles.tableItemBlockTitle}>V2 VAULTS:</h2>
                              <p className={styles.tableItemBlockText}>
                                More global scope analytics for Futures,Bond analytics Fund
                                analytics.
                              </p>
                            </div>
                          </div>
                          <div className={`${styles.tabletItem} col_33`}>
                            <div className={styles.tableItemBlock}>
                              <h2 className={styles.tableItemBlockTitle}>V3 VAULTS:</h2>
                              <p className={styles.tableItemBlockText}>
                                More global scope analytics for Futures,Bond analytics Fund
                                analytics.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.tabletItemsBottom}>
                        <div className={styles.tabletItemsRow}>
                          <div className={`${styles.tabletItem} col_33`}>
                            <div className={styles.tableItemBlock}>
                              <p className={styles.tableItemBlockText}>Jan 2024</p>
                            </div>
                          </div>
                          <div className={`${styles.tabletItem} col_33`}>
                            <div className={styles.tableItemBlock}>
                              <p className={styles.tableItemBlockText}>March 2024</p>
                            </div>
                          </div>
                          <div className={`${styles.tabletItem} col_33`}>
                            <div className={styles.tableItemBlock}>
                              <p className={styles.tableItemBlockText}>Sep 2024</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </>
              </div>
            </div>
          </div>
        </section>
      </MainContent>
      <Footer />
    </div>
  );
};

export default AboutUs;
