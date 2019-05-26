import React from 'react';
import { NavLink } from 'react-router-dom';
import './nav.css';

const Nav = () => {
  return(
    <nav className="nav">
      <ul className="nav__list nav__list--secondary">
        <li className="nav__item">
          <a className="nav__link" href="https://github.com/laurenashpole/react-inner-image-zoom">Github</a>
        </li>
        <li className="nav__item">
          <a className="nav__link" href="#">NPM</a>
        </li>
      </ul>

      <ul className="nav__list nav__list--primary">
        <li className="nav__item nav__item--left">
          <NavLink to="/" exact className="nav__link" activeClassName="nav__link--active">Inner Image Zoom</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/demos" className="nav__link" activeClassName="nav__link--active">Demos</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/docs" className="nav__link" activeClassName="nav__link--active">Docs</NavLink>
        </li>
        <li className="nav__item">
          <NavLink to="/support" className="nav__link" activeClassName="nav__link--active">Support</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;