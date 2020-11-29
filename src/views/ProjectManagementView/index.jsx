import React, { Fragment } from 'react';

import './style.scss';

import SecondaryPageBanner from '../../components/SecondaryPagesBanner';

const ProjectManagementView = () => {
  return (
    <Fragment className="interior-design">
      <SecondaryPageBanner title={'project management'} />
    </Fragment>
  );
};

export default ProjectManagementView;
