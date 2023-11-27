import React from 'react';
import './body_css/body_div.css';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const MainBar: React.FC = () => {
  return (
    <div className='MainBar'>
      <Slider>
        <img alt='img'  />
        <img alt='img'  />
        <img alt='img' />
      </Slider>
    </div>
  );
};

export default MainBar;