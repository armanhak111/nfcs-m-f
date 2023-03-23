import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

import TooltipSvg from '../../../Assets/Icons/cards/TooltipSvg';
import { ROUTES } from '../../../Constants/Routes';
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
}) => {
  const Component = icon;
  const history = useHistory();

  const [toolTip, setToolTip] = useState<boolean>(false);

  const isAuth = true;

  const orderAnalytic = () => {
    if (isAuth) {
      history.push(ROUTES.DASHBOARD);
    } else {
      history.push(ROUTES.SIGN_IN);
    }
  };
  console.log(isAuth);
  return (
    <div className={`${styles.cardsCol_25} col_25`}>
      <div>
        <ToolTip
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae et arcu cras dolor
        sollicitudin viverra maecenas pretium faucibus. Fermentu"
          isOpen={toolTip}
        />
      </div>
      <div className={`${styles.cardItem} ${styles[`${hoverEffect}`]}`}>
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
        <div className={styles.comingSoon}>Coming Soon</div>
        <div className={styles.cardIcon}>
          <Component />
        </div>
        <Typography className={styles.cardTitle} component="h2" id={title} />
        <Typography className={styles.cardText} component="p" id={info} />
        <div className={styles.cardPrice}>
          {hoverEffect === 'cardItemDisabled' ? (
            <p>_ _ _</p>
          ) : (
            <>
              {' '}
              {saleMode && <s>{saledPrice}$</s>}
              <p>{price}$</p>
            </>
          )}
        </div>
        <Button
          type="primary"
          customClass={styles.cardBtn}
          id={buttonText}
          onClick={orderAnalytic}
        />
      </div>
    </div>
  );
};

export default Card;
