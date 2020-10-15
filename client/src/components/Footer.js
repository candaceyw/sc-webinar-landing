import React from 'react';
import logo from '../assests/sc-logo-rev.png';

function Footer() {
  return (
    <footer>
      <div className='bottom-bar'>
        <img src={logo} alt='strategycorps logo' className='footer-logo' />
      </div>
    </footer>
  );
}

export default Footer;
