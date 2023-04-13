import React from 'react';

// import BehanceSvg from '../../../Assets/Icons/BehanceSvg';
// import LinkedIn from '../../../Assets/Icons/LinkedIn';
import LocationSvg from '../../../Assets/Icons/LocationSvg';
import PhoneSvg from '../../../Assets/Icons/PhoneSvg';
import Logo from '../../../Assets/images/logo.svg';
// import { FOOTER_ICONS } from '../conastantsMolecul';
// import { TFooterIcon } from '../typesMolecules';
import styles from './footer.module.scss';
import MiniFooter from './MiniFooter';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.footerTop}>
          <div className={styles.footerLogo}>
            <img src={Logo} alt="Logo" />
          </div>
          {/* <div className={styles.footerSoccial}>
            <ul className={styles.footerSocialList}>
              {FOOTER_ICONS.map((currentIcon: TFooterIcon) => {
                const IconComponent = currentIcon.icon;
                return (
                  <li key={currentIcon.href}>
                    <span>
                      <IconComponent />
                    </span>
                  </li>
                );
              })}
            </ul>
          </div> */}
          <div className={styles.footerContact}>
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
            {/* <div className={styles.designerInfo}>
              <ul className={styles.desingnerInfoList}>
                <li>
                  <span>Desing By</span> Gohar Frangyan
                </li>
                <li>
                  <a href="#" target="_blank">
                    <BehanceSvg />
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank">
                    <LinkedIn />
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        <MiniFooter />
      </div>
    </footer>
  );
};

export default Footer;
