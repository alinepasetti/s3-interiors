import React, { Fragment, Component } from 'react';

import './style.scss';

import SecondaryPageBanner from '../../components/SecondaryPagesBanner';
import SupplyImage from '../../components/SupplyImage';
import DownloadCatalogSection from '../../components/DownloadCatalogSection';
import Footer from '../../components/Footer';
import Registration from '../../components/Registration';

class FFESupplyView extends Component {
  state = {
    images: [
      'A1',
      'A2',
      'A3',
      'B1',
      'B2',
      'B3',
      'C1',
      'C2',
      'C3',
      'D1',
      'D2',
      'D3',
      'E1',
      'E2',
      'E3',
      'F1',
      'F2',
      'F3',
    ],
  };
  render() {
    return (
      <Fragment>
        <SecondaryPageBanner title={'STANDARD AND BESPOKE FF&E SUPPLY'} />
        <p className="FFE-supply-text">
          Our manufacturing partners are based in United Kingdom and Europe (Italy, Portugal and
          Spain) and our specific supply of FF&E and joinery has years of experience in the
          manufacture of world-renowned projects and is always committed to lead-times and quality.
        </p>
        <section className="supply-images-section">
          {this.state.images.map((e, id) => {
            return <SupplyImage image={`images/supply/${e}.jpg`} id={id} />;
          })}
        </section>
        <p className="FFE-supply-text">
          Our goal is to understand your requirements to correctly source from our partners
          portfolio providing a single contact point for best pricing, terms, customer service and
          delivery of your project.
        </p>
        <DownloadCatalogSection />
        <Footer />
      <Registration />
      </Fragment>
    );
  }
}

export default FFESupplyView;
