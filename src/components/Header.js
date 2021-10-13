import React, { useContext, useEffect, useState } from 'react';
import { __RouterContext } from 'react-router';
import { Link } from 'react-router-dom';
import { useSpring, animated } from 'react-spring';
import { FaSun } from 'react-icons/fa';

import Footer from './Footer';
import { paths } from './../data/paths'

const Header = ({ setTheme }) => {
  const [active, setActive] = useState(false);
  const { history } = useContext(__RouterContext)

  const fold = useSpring({
    transform: active ? 'scaleY(1)' : 'scaleY(0)',
    visibility: active ? 'visible' : 'hidden',
  })

  // hide navigation after changing path
  useEffect(() => {
    history.listen(() => setActive(false));
  }, [history]);

  const renderNavList = () => {
    // render desktop navigation
    if(window.innerWidth >= 1100){
      return (
        <ul className="nav__list--desktop">
          {paths.map((path, i) => {
            return (
              <li key={i} className={`nav__item--desktop ${
                history.location.pathname.match(/\/\w+|\//).toString() === path.pathname.match(/\/\w+|\//).toString() ? 'current' : ''
              }`}>
                <Link to={path.pathname}>{path.name}</Link>
              </li>
            )
          })}
        </ul>
      )
    }
    // render mobile navigation
    return (
      <animated.ul style={{...fold, visibility: fold.transform.to(o => o === 0.1 ? 'hidden' : 'visible') }} className="nav__list">
      {paths.map((path, i) => {
      return (
        <li
          key={i}
          className={`nav__item ${
            history.location.pathname.match(/\/\w+|\//).toString() === path.pathname.match(/\/\w+|\//).toString() ? 'current' : ''
          }`}>
          <Link to={path.pathname}>{path.name}</Link>
        </li>
      );
    })}
    <Footer />
    </animated.ul>);
  };

  return (
    <header className="Header">
      <div className="container">
      <Link to="/" className="logo">
        haxikowy<span className="highlight">.</span>
        <span className="orange-hi">logo</span>
      </Link>
      <nav className="nav">
        {renderNavList()}
        <button onClick={() => setActive(prev => !prev)} className="hamburger">
          <span className="hamburger__inner"></span>
        </button>
        <button onClick={() => setTheme(prev => !prev)} className="theme-switch">
          <FaSun />
        </button>
      </nav>
      </div>
    </header>
  );
};

export default Header;
