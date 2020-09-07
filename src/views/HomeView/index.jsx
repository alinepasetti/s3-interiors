import React, { Fragment } from 'react';

import './style.scss';

import MainBanner from '../../components/MainBanner';
import AboutSection from '../../components/AboutSection';
import SentencesSection from '../../components/SentencesSection';
import Footer from '../../components/Footer';
import Registration from '../../components/Registration';
// import ModalTest from '../../components/ModalTest';

const HomeView = () => {
  return (
    <Fragment className="home">
      <MainBanner />
      <AboutSection />
      <SentencesSection />
      <Footer />
      <Registration />
    </Fragment>
  );
};

export default HomeView;
