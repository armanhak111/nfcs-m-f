import React from 'react';

import Footer from '../../moleculs/Footer';
import Header from '../../moleculs/Header';
import MainContent from '../../organisms/MainContent';
import styles from './privacy.module.scss';

const Privacy = () => {
  return (
    <div className={`${styles.privacyPage} privacy-page page`}>
      <Header />
      <MainContent>
        <section className={styles.privacySection}>
          <div className="container">
            <div className={styles.privacyItem}>
              <h2 className={`${styles.privacyTitle} title`}>Privacy Policy</h2>
              <p className={styles.privacyText}>
                At NFCS, we are committed to protecting the privacy of our users. We collect
                personal information such as email and password during registration to provide you
                access to our platform. We require email confirmation to verify your identity and
                protect your account from unauthorized access.
                <br />
                <br />
                <br />
                We also collect analytical data to improve our platform, including the use of
                cookies and similar technologies. This data may include information about your
                browsing behavior, device information, and IP address.
                <br />
                <br />
                <br />
                We do not share your personal information with third parties, except as required by
                law or to provide our services to you. We take appropriate measures to protect your
                personal information from unauthorized access, alteration, or disclosure.
                <br />
                <br />
                <br />
                By using our platform, you consent to the terms of this Privacy Policy. If you have
                any questions or concerns, please contact us at support@nfcs.com.
              </p>
            </div>
          </div>
        </section>
      </MainContent>
      <Footer />
    </div>
  );
};

export default Privacy;
