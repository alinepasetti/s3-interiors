import React from 'react';
import './style.scss';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <img src="/images/S3_Logo.png" alt="s3 logo" />
      </Link>
      <ul>
        <li>
          <a href="#about">Who?</a>
        </li>
        <li>
          <Link to="#">Say Hi!</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
