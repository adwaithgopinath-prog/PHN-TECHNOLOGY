import React, { useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import SkillhubTopBar from './SkillhubTopBar';
import SkillhubFooter from './SkillhubFooter';

const SkillhubLayout = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="skillhub-layout-wrapper" style={{ backgroundColor: '#05070a' }}>
      <SkillhubTopBar />
      <div className="skillhub-content-wrapper">
        <Outlet />
      </div>
      <SkillhubFooter />
    </div>
  );
};

export default SkillhubLayout;
