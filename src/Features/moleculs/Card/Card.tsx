import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';

import TooltipSvg from '../../../Assets/Icons/cards/TooltipSvg';
import { ROUTES } from '../../../Constants/Routes';
import { getCurrentUser } from '../../../Store/Selectors/auth';
import { setActionModal } from '../../../Store/Slices/modal';
import Button from '../../atoms/Button';
import ToolTip from '../../atoms/ToolTip';
import Typography from '../../atoms/Typography';
import { THomeCards } from '../../organisms/organismsTypes';
// import Dashboard from '../../views/Dashboard';
import styles from './card.module.scss';

interface ICard extends THomeCards {
  saleMode?: boolean;
}

const Card: React.FC<ICard> = ({
  saleMode = true,
  saledPrice,
  icon,
  price,
  title,
  info,
  buttonText,
  hoverEffect,
  ttt,
}) => {
  const Component = icon;
  const history = useHistory();
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const [toolTip, setToolTip] = useState<boolean>(false);
  console.log(ttt);
  const currentUser = useSelector(getCurrentUser);

  const isAuth = Object.values(currentUser).length;

  const orderAnalytic = (id: string) => {
    if (pathname === '/') {
      if (isAuth) {
        history.push(ROUTES.DASHBOARD);
      } else {
        history.push(ROUTES.SIGN_IN);
      }
    } else {
      dispatch(setActionModal(id));
    }
  };
  return (
    <div className={`${styles.cardsCol_25} col_25`}>
      {ttt && (
        <div>
          <ToolTip text={ttt} isOpen={toolTip} />
        </div>
      )}
      <div className={`${styles.cardItem} ${styles[`${hoverEffect}`]}`}>
        {ttt && (
          <div className={styles.cardTooltip}>
            <button
              onMouseLeave={() => setToolTip(false)}
              onMouseEnter={() => setToolTip(true)}
              type="button"
              aria-label="tooltip"
            >
              <TooltipSvg />
            </button>
          </div>
        )}
        <div className={styles.comingSoon}>Coming Soon</div>
        <div className={styles.cardIcon}>
          <Component />
        </div>
        <Typography className={styles.cardTitle} component="h2" id={title} />
        <Typography className={styles.cardText} component="p" id={info} />
        <div className={styles.cardPrice}>
          <>
            {' '}
            {saleMode && <s>{saledPrice}$</s>}
            <p>{price}$</p>
          </>
        </div>
        {/* <div className={styles.underScore}>{hoverEffect === 'cardItemDisabled' && <> _ _ _</>}</div> */}
        <Button
          type="primary"
          customClass={styles.cardBtn}
          id={buttonText}
          onClick={() => orderAnalytic(title)}
        />
      </div>
    </div>
  );
};

export default Card;
