import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import LogoSvg from '../../../Assets/Icons/LogoSvg';
import Loader from '../../../Components/Multiusable/Loader';
import { ROUTES } from '../../../Constants/Routes';
import { getAuthLoading } from '../../../Store/Selectors/auth';
import Button from '../../atoms/Button';
import Typography from '../../atoms/Typography';
import MainContent from '../MainContent';
import styles from './authViews.module.scss';

type TLinkedText = {
  title: string;
  href: string;
};

interface IAuthViewProps {
  header: string;
  bottomText: string;
  bottomLinkedText: TLinkedText;
  aboveButtonText?: TLinkedText;
  buttonText: string;
  submitHandler: () => void;
  allowSubmit: boolean;
}
const AuthView: React.FC<IAuthViewProps> = ({
  header,
  bottomText,
  bottomLinkedText,
  aboveButtonText,
  buttonText,
  children,
  allowSubmit,
  submitHandler,
}) => {
  const history = useHistory();
  const loading = useSelector(getAuthLoading);
  return (
    <div className={`${styles.loginPage} page`}>
      <header className={styles.loginHeader}>
        <div onClick={() => history.push(ROUTES.HOME)}>
          <LogoSvg />
        </div>
      </header>
      <MainContent>
        <section className={styles.loginSection}>
          <div className={`${styles.loginForm} ${loading ? styles.activeLoader : ''}`}>
            <form onSubmit={submitHandler} action="">
              {loading && (
                <div className={styles.loader}>
                  {' '}
                  <Loader type="auth" />
                </div>
              )}
              <Typography className={`${styles.loginTitle} title`} component="h2" id={header} />
              {children}
              {aboveButtonText && (
                <div className={styles.forgotBtn}>
                  <Typography
                    component="span"
                    id={aboveButtonText.title}
                    onClick={() => history.push(aboveButtonText.href)}
                  />
                </div>
              )}
              <Button
                customClass={styles.loginBtn}
                submit
                disabeled={!allowSubmit}
                type="primary"
                id={buttonText}
              />
            </form>
            <div className={styles.dontHaveAccount}>
              <p>
                <Typography component="span" id={bottomText} />
                <Typography
                  component="span"
                  className={styles.linked}
                  id={bottomLinkedText.title}
                  onClick={() => history.push(bottomLinkedText.href)}
                />
              </p>
            </div>
          </div>
        </section>
      </MainContent>
    </div>
  );
};

export default AuthView;
