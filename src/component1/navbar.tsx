import {
  Box,
  Button,
  useColorMode,
  useDisclosure,
} from '@chakra-ui/react';
import {
  MoonIcon,
  SunIcon
} from '@chakra-ui/icons';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const ThemeSelector = () => {
    const { colorMode, toggleColorMode } = useColorMode()

    return (
      <Box textAlign='right' py={4}>
        <Button onClick={toggleColorMode}>
          {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Box>
    )
  }

  const [click, setClick] = useState(false);
  const [, setButton] = useState(true);

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

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Box>
        <div className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              Readly
            </Link>

            <div className="menu-icon" onClick={handleClick}>
              {click ? <MoonIcon /> : <SunIcon />}
            </div>

            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className="nav-item">
                <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/read" className="nav-links" onClick={closeMobileMenu}>
                  Read
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/learn" className="nav-links" onClick={closeMobileMenu}>
                  Learn
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/watch" className="nav-links" onClick={closeMobileMenu}>
                  Watch
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-links" onClick={closeMobileMenu}>
                  About
                </Link>
              </li>
              <li>
                <ThemeSelector />
              </li>
            </ul>
          </div>
        </div>
      </Box>
    </>
  );
}
