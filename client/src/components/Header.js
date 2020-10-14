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
      </div>
    </div>
  );
}

export default Header;
