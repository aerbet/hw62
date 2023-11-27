import React from 'react';
import './body_css/body_div.css';
import pcImage1 from "../../../images/pc_image1.jpeg";
import pcImage2 from "../../../images/pc_image2.jpeg";
import pcImage3 from "../../../images/pc_image3.jpeg";

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const MainBar: React.FC = () => {
  return (
    <div className='MainBar'>
      <Slider>
        <img alt='img' src={pcImage1} />
        <img alt='img' src={pcImage2} />
        <img alt='img' src={pcImage3} />
      </Slider>
    </div>
  );
};

export default MainBar;