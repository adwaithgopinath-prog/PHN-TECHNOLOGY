import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import ProgramsTopBar from './ProgramsTopBar';
import './ProgramsLayout.css';

const ProgramsLayout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="programs-layout">
      <ProgramsTopBar />
      <div className="programs-main-content">
        <Outlet />
      </div>
    </div>
  );
};

export default ProgramsLayout;
