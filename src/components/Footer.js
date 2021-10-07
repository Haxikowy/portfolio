import React from 'react';
import { FaTwitter, FaGithub, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="Footer">
      <a
        rel="noreferrer"
        target="_blank"
        href="https://twitter.com/haxikowy"
        className="icon">
        <FaTwitter />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="https://github.com/Haxikowy"
        className="icon">
        <FaGithub />
      </a>
      <a
        rel="noreferrer"
        target="_blank"
        href="mailto:szymon2407@hotmail.com"
        className="icon">
        <FaEnvelope />
      </a>
    </footer>
  );
};

export default Footer;
