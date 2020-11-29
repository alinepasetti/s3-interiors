import React, { Fragment, Component } from 'react';

import './style.scss';

import SecondaryPageBanner from '../../components/SecondaryPagesBanner';
import InteriorDesignCircles from '../../components/InteriorDesignCircles';

class InteriorDesignView extends Component {
  state = {
    characteristics: ['feasibility', 'concept', 'development', 'technical', 'evaluation', 'production & execution', 'review']
  }
  render() {
    return (
      <Fragment>
        <SecondaryPageBanner title={'Interior Design'} />
        <section className="interior-desig-img"></section>
        <section className="text-area">
          <p>
            Our work values is to take you to a complete immersion in the experience of interior
            design, from your mind to reality. We work between the balance of art and design, where
            through the study of materials, colors and textures, we bring you functionality in the
            form of beauty. From the amount of light, to planning the layout and even the fabric
            threads. Each project is part of our family and we have a complete passion for it. Our
            creative sector works together with the production manager who is always up to date with
            new products, green solutions, latest award winners and new developments to adapt the
            best material supply and cost options. We will endeavour to understand your needs and
            encourage your creativity to bring into your project an exclusive and functional
            identity.
          </p>
        </section>
        <section className='interior-design-circles-section'>
        {this.state.characteristics.map(e => {
          return <InteriorDesignCircles title={e} />
        })}
        </section>
      </Fragment>
    );
  }
}

export default InteriorDesignView;
