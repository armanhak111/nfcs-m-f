import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';

import { PageLoader } from './Components/Dumb/PageLoader/PageLoader';
import ScrollToTop from './Components/Dumb/ScrollToTop';
import AboutUs from './Features/views/AboutUs';
import ChangePassword from './Features/views/AutohFlow/ChangePassword';
import ForgotPassword from './Features/views/AutohFlow/ForgotPassword';
import ResetPassword from './Features/views/AutohFlow/ResetPassword';
import SignIn from './Features/views/AutohFlow/SignIn';
import SignUp from './Features/views/AutohFlow/SignUp';
import Contact from './Features/views/Contact';
import CurrentAnalytic from './Features/views/CurrentAnalytic';
import Dashboard from './Features/views/Dashboard';
import HomePage from './Features/views/HomePage';
import Privacy from './Features/views/Privacy';
import Terms from './Features/views/Terms';
import { getCurrentUser } from './Store/Selectors/auth';
import { getUser } from './Store/Slices/auth';

const Routes: React.FC = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(getCurrentUser);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      dispatch(getUser());
    }
  }, []);
  console.log(currentUser);
  if (token && !Object.values(currentUser).length) {
    return <PageLoader />;
  }
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Route exact path="/sign-in">
            <SignIn />
          </Route>
          <Route exact path="/sign-up">
            <SignUp />
          </Route>
          <Route exact path="/forgot-pass">
            <ForgotPassword />
          </Route>
          <Route exact path="/change-password">
            {!Object.entries(currentUser).length && !currentUser.isActivated && <Redirect to="/" />}
            <ChangePassword />
          </Route>
          <Route exact path="/reset-password/:id">
            <ResetPassword />
          </Route>
          <Route exact path="/dashboard">
            {!Object.entries(currentUser).length && <Redirect to="/" />}
            <Dashboard />
          </Route>
          <Route exact path="/about">
            <AboutUs />
          </Route>
          <Route exact path="/description/:current">
            <CurrentAnalytic />
          </Route>
          <Route exact path="/privacy">
            <Privacy />
          </Route>
          <Route exact path="/terms">
            <Terms />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <HomePage />
          </Route>
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Routes;
