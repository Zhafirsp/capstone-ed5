import React, { useState, useEffect } from 'react';
import { Button } from '../pages/Button';
import { Link } from 'react-router-dom';
import { Heading } from '@chakra-ui/react';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
          <img src="images/Logo.png" className="logo-img" />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Beranda
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/tentangkami'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Tentang Kami
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/membaca'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Membaca
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/berhitung'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Berhitung
              </Link>
            </li>
            <li>
              <Link
                to='/sign-up'
                className='nav-links-mobile'
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </li>
          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}
        </div>
      </nav>
    </>
  );
}

export default Navbar;
