import React from 'react';

import Card from '../../moleculs/Card';
import { DAHBOARD_CARDS } from '../organismConstants';
import { THomeCards } from '../organismsTypes';
import styles from './homeCards.module.scss';

const BuyAnalytic: React.FC = () => {
  return (
    <section>
      <h2 className="title dashboard-title buy-forecast-title">Buy Forecast</h2>
      <p className="dashboard-sub">Text about discount- 50 %</p>
      <div>
        <div className={styles.cardRow}>
          {DAHBOARD_CARDS.map((current: THomeCards) => {
            return (
              <Card
                hoverEffect={current.hoverEffect}
                buttonText={current.buttonText}
                key={current.title}
                icon={current.icon}
                info={current.info}
                title={current.title}
                saledPrice={current.saledPrice}
                price={current.price}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BuyAnalytic;
