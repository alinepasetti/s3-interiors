import React, { Fragment } from 'react';

import './style.scss';

import MainBanner from '../../components/MainBanner';
import AboutSection from '../../components/AboutSection';
import SentencesSection from '../../components/SentencesSection';
import Footer from '../../components/Footer';

const HomeView = () => {
  return (
    <Fragment>
      <MainBanner />
      <AboutSection />
      <SentencesSection />
      <Footer />
    </Fragment>
  );
};

export default HomeView;
