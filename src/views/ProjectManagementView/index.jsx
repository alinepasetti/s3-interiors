import React, { Fragment } from 'react';

import './style.scss';

import SecondaryPageBanner from '../../components/SecondaryPagesBanner';
import StagesSection from '../../components/StagesSection';
import Footer from '../../components/Footer';
import Registration from '../../components/Registration';

const ProjectManagementView = () => {
  return (
    <Fragment className="interior-design">
      <SecondaryPageBanner title={'project management'} />
      <h1 className='project-management-sentence'>More than a network of manufacturers, we are project managers of your FF&E and Joinery projects.</h1>
      <StagesSection />
      <Footer />
      <Registration />
    </Fragment>
  );
};

export default ProjectManagementView;
