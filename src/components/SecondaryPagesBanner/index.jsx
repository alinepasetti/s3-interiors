import React from 'react';

import './style.scss';

const SecondaryPageBanner = ({ title }) => {
  return <header className='secondary-banner'><h3>{title.toUpperCase()}</h3></header>;
};

export default SecondaryPageBanner;
