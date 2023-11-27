import React from 'react';
import './footer_css/Footer.css';
import RightColumn from "./RightColumn";
import MiddleColumn from "./MiddleColumn.tsx";
import LeftColumn from "./LeftColumn";

const Footer: React.FC = () => {
  return (
    <div className='footer'>
      <LeftColumn/>
      <MiddleColumn/>
      <RightColumn/>
    </div>
  );
};

export default Footer;