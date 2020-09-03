import React from 'react';
import { Link } from 'react-router-dom';

import './style.scss';

const AboutSection = () => {
  return (
    <section id="about">
      <h2>S3 who?</h2>
      <p>
        We are 3 super partners who have been in the manufacturing, supplying and interior design
        industries for long enough to realise we wanted to take sourcing and purchasing for the
        luxury market to a further level and worked towards to successfully deliver 3{' '}
        <span className="yellow">main</span> S o l u t i o n s for you:
      </p>
      <div className="services_cards_list">
        <Link to="/interior-design" className="img">
          <h3>interior design</h3>
        </Link>
        <Link to="/project-management" className="img">
          <h3>project management</h3>
        </Link>
        <Link to="/ffe" className="img">
          <h3>FF&E Supply</h3>
        </Link>
      </div>
    </section>
  );
};

export default AboutSection;
