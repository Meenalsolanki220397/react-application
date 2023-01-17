import React from 'react';
import { Link } from 'react-router-dom';

// Check logo source path is not working
const Logo = () => {
  return <img src="../assests/images/log.jpg" />;
};

const Header = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        margin: '5px',
        padding: '5px',
        border: '1px solid black',
      }}
    >
      <h3>I am header</h3>
      {/* <Logo /> */}
      {/* Nav Bar List */}
      <div>
        <ul style={{ listStyleType: 'none', display: 'flex' }}>
          <Link to="/about">
            <li style={{ padding: '10px' }}>About Us</li>
          </Link>
          <Link to="/contact">
            {' '}
            <li style={{ padding: '10px' }}>Contact Us</li>{' '}
          </Link>
          <Link to="/cart">
            {' '}
            <li style={{ padding: '10px' }}>Cart</li>{' '}
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
