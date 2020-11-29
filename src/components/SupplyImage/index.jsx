import React from 'react';

import './style.scss';

const SupplyImage = ({image, id}) => {
  return <img className='supply-image' src={image} alt={`supplier ${id}`} />;
};

export default SupplyImage