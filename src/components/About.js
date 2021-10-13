import React from 'react'
import { animated } from 'react-spring';
import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import darkTheme from '../syntaxHighlighter/darkTheme';
import lightTheme from '../syntaxHighlighter/lightTheme';
import { FaFileDownload } from 'react-icons/fa';

const about = `haxikowy.about = {
  fullName: 'Szymon Dolnik',
  age: '23',
  location: 'Zabrze, Poland',
  education: 'logistics technician',
  hobby: ['programming', 'gaming', 'dogs'],
}`;


const About = ({style, theme}) => {
  const codeTheme = theme ? lightTheme : darkTheme;

  return (
    <animated.main style={style} className="About container">
      <div className="about__text--container">
        <p className="about__text">Hi! I’m Szymon, thanks for checking out my portfolio. My main goal is to become sucesfull fullstack developer. Now I’m mainly focusing on front-end side. I’m continuously developing my programming skills since 2019’ autumn. I like drinking coffe, petting my dogs, gaming and last but not least programming!</p>
        <a href="assets/resume.pdf" download className="about__resume"><FaFileDownload className="icon-download" />resume.pdf</a>
      </div>
      <SyntaxHighlighter className="about__code" language="custom" wrapLongLines style={codeTheme} >{about}</SyntaxHighlighter>
    </animated.main>
  )
}

export default About
