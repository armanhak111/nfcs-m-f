import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router';

const ScrollToTop: React.FC = ({ children }) => {
  const location = useLocation();
  useLayoutEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
