import React, { useMemo, useState } from 'react';
import { useSelector } from 'react-redux';
import useMediaQuery from 'react-use-media-query-hook';

import MenuFoldSvg from '../../../Assets/Icons/MenuFoldSvg';
import { DASHBOARD } from '../../../Constants/dashboard';
import { SCREENS } from '../../../Constants/ScreenResolutions';
import { getDashboardCurrentSlide } from '../../../Store/Selectors/dashboardLocal';
import DashboardSideBar from '../../moleculs/DashboardSideBar';
import MiniFooter from '../../moleculs/Footer/MiniFooter';
import Header from '../../moleculs/Header';
import styles from './dashboard.module.scss';
// import { useDispatch, useSelector } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import Loader from '../../../Components/Multiusable/Loader';
// import { ROUTES } from '../../../Constants/Routes';
// import { getAuthStatus, getCurrentUser } from '../../../Store/Selectors/auth';
// import { getDashboardLoading } from '../../../Store/Selectors/dashboard';
// import { checkAuth, logout, setCurrentUser, users } from '../../../Store/Slices/auth';
// import Button from '../../atoms/Button';
// import styles from './dashboard.module.scss';

const Dashboard: React.FC = () => {
  const currentSLide = useSelector(getDashboardCurrentSlide);
  const sidebar = document.getElementsByClassName('tabletOpener');
  const [open, setOpen] = useState(false);
  // const dispatch = useDispatch();
  // const user = useSelector(getCurrentUser);
  // const auth = useSelector(getAuthStatus);
  // const history = useHistory();
  // const loading = useSelector(getDashboardLoading);

  // const handleLogout = () => {
  //   dispatch(logout());
  //   dispatch(setCurrentUser({}));
  //   history.push(ROUTES.HOME);
  // };

  // useEffect(() => {
  //   if (!auth) {
  //     dispatch(checkAuth(history));
  //   }
  // }, []);

  // useEffect(() => {
  //   if (Object.entries(user).length) {
  //     dispatch(users(user.id));
  //   }
  // }, [user]);
  const Component = useMemo(() => {
    return DASHBOARD[currentSLide];
  }, [currentSLide]);
  const handelOpen = () => {
    setOpen(!open);
  };
  const isMobile = useMediaQuery(SCREENS.smallTablet);

  console.log(sidebar, 'ur es ara');
  return (
    <div className={`${styles.dashboardPage} page`}>
      <Header />
      <DashboardSideBar open={open} setOpen={setOpen} />
      <main className="main">
        <div className={styles.dashoardRight}>
          {isMobile && (
            <button onClick={handelOpen} className={styles.dashboardSideOpen}>
              <MenuFoldSvg />
            </button>
          )}
          {sidebar}
          <Component />
        </div>
      </main>
      <footer className={styles.dashboardFooter}>
        <MiniFooter />
      </footer>
      {/* {loading && (
        <div className={styles.loader}>
          {' '}
          <Loader type="auth" />
        </div>
      )}
      <div>
        <h1>{user.email}</h1>
        <h1>{user.id}</h1>
        <Button type="secondary" defaultMessage="LOGOUT" onClick={handleLogout} />
        <Button
          type="secondary"
          defaultMessage="CHANGE PASS"
          onClick={() => history.push('/change-password')}
        />
      </div> */}
    </div>
  );
};

export default Dashboard;
