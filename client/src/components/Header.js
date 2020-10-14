import React from 'react';
import './styles.scss';
import hero from '../assests/hero-image.jpg';
import logo from '../assests/sc-logo-rev.png';

function Header() {
  return (
    <div>
      <div className='top-bar'></div>
      <div className='container'>
        <img src={hero} alt='man looking at phone' className='hero-image' />
        <img src={logo} alt='strategycorp logo' className='logo-header' />
        <h1 className='heading'>
          Drive Today’s <br /> Marketing Efforts <br />
          in Style
        </h1>
        <h3 className='date'>December 1, 2020 | 1PM CT</h3>
      </div>
    </div>
  );
}

export default Header;
