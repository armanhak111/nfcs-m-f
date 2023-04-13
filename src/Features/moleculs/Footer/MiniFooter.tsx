import React from 'react';
import { useHistory } from 'react-router-dom';

import CopyRightSvg from '../../../Assets/Icons/CopyRightSvg';
import Typography from '../../atoms/Typography';
import { FOOTER_MENU } from '../conastantsMolecul';
import styles from './footer.module.scss';

interface IMiniFooter {
  isDashboard?: boolean;
}
const MiniFooter: React.FC<IMiniFooter> = ({ isDashboard = false }) => {
  const history = useHistory();
  console.log(isDashboard);
  return (
    <div className={styles.footerBottom}>
      <p className={styles.copyRight}>
        <span>
          <CopyRightSvg />
        </span>
        <Typography component="span" id="NFCS LLC. All Rights reserved 812254" />
      </p>
      <menu className={styles.footerMenu}>
        {FOOTER_MENU.map((currentMenuItem: Record<string, string>) => {
          return (
            <Typography
              onClick={() => history.push(currentMenuItem.href)}
              key={currentMenuItem.id}
              id={currentMenuItem.id}
              className={styles.footerMenuLink}
              component={'span'}
            />
          );
        })}
      </menu>
    </div>
  );
};

export default MiniFooter;
