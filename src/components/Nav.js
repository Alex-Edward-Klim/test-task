import React from 'react';

import './navStyle.css'

import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="navbar">
      <ul className="navLinks">
        <Link className="link" to="/">
          <li>Main</li>
        </Link>
        <Link className="link" to="/news">
          <li>News</li>
        </Link>
        <Link className="link" to="/catalog">
          <li>Catalog</li>
        </Link>
        <Link className="link" to="/contacts">
          <li>Contacts</li>
        </Link>
      </ul>
    </nav>
  )
}

export default Nav;
