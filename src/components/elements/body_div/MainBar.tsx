import React from 'react';
import Cpu from '../../../images/cpu.jpg';
import Cooler from '../../../images/cooler.png';
import Mother from '../../../images/mother.png';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

const MainBar: React.FC = () => {
  return (
    <div className='MainBar'>
      < Slider >
        <img alt='img' src={Cpu}/>
        <img alt='img' src={Cooler}/>
        <img alt='img' src={Mother}/>
      </Slider>
    </div>
  );
};

export default MainBar;