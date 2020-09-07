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
          <a href="/#about">Who?</a>
        </li>
        <li>
          <a href="mailto:hello@s3interiors.co.uk">Say Hi!</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
