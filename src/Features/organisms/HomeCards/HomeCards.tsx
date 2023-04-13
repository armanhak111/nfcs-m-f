import React from 'react';

import Card from '../../moleculs/Card';
import { HOME_CARDS } from '../organismConstants';
import { THomeCards } from '../organismsTypes';
import styles from './homeCards.module.scss';

const HomeCards: React.FC = () => {
  return (
    <div className="container">
      <h2 className="title">You have the ability to customize your unique analytics</h2>
      <div className={styles.cardItems}>
        <div className={styles.cardRow}>
          {HOME_CARDS.map((current: THomeCards) => {
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
                ttt={current.ttt}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default HomeCards;
