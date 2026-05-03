import React, { useEffect } from 'react';
import PartnersSection from '../components/PartnersSection';

const Partners = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="partners-standalone-page">
      <div className="page-top-spacer"></div>
      <PartnersSection limitInitial={12} />
    </main>
  );
};

export default Partners;
