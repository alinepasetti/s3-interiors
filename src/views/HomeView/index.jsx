import React, { Fragment } from 'react';

import './style.scss';

import MainBanner from '../../components/MainBanner';
import AboutSection from '../../components/AboutSection';
import SentencesSection from '../../components/SentencesSection';
import Footer from '../../components/Footer';
import Registration from '../../components/Registration';

const HomeView = () => {
  return (
    <Fragment>
      <MainBanner />
      <AboutSection />
      <SentencesSection />
      <Footer />
      <Registration />
    </Fragment>
  );
};

export default HomeView;
