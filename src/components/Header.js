import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaSun } from 'react-icons/fa';
import Footer from './Footer';

const paths = [
  { name: 'home', pathname: '/' },
  { name: 'work', pathname: '/work/0' },
  { name: 'about', pathname: '/about' },
  { name: 'contact', pathname: '/contact' },
];

const Header = ({ history, theme, setTheme }) => {
  const [active, setActive] = useState(false);

  // hide navigation after changing path
  useEffect(() => {
    history.listen(() => setActive(false));
  }, [history]);

  const isActive = active ? 'active' : '';

  const renderNavList = () => {
    return paths.map((path, i) => {
      return (
        <li
          key={i}
          className={`nav__item ${
            history.location.pathname.match(/\/\w+|\//).toString() === path.pathname.match(/\/\w+|\//).toString() ? 'current' : ''
          }`}>
          <Link to={path.pathname}>{path.name}</Link>
        </li>
      );
    });
  };

  return (
    <header className="Header">
      <Link to="/" className="logo">
        haxikowy<span className="highlight">.</span>
        <span className="orange-hi">logo</span>
      </Link>
      <nav className="nav">
        <ul className={`nav__list ${isActive}`}>
          {renderNavList()}
          <Footer />
        </ul>
        <button onClick={() => setActive(!active)} className="hamburger">
          <span className="hamburger__inner"></span>
        </button>
        <button onClick={() => setTheme(!theme)} className="theme-switch">
          <FaSun />
        </button>
      </nav>
    </header>
  );
};

export default Header;
