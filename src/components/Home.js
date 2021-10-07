import React from 'react';

import { PrismLight as SyntaxHighlighter } from 'react-syntax-highlighter';
import custom from '../codeTheme/custom';
import darkTheme from '../codeTheme/darkTheme';
import lightTheme from '../codeTheme/lightTheme';

const skills = `haxikowy.skills = {
  javascript: ['ES6+', 'React.js', 'Redux'],
  css: ['CSS3+', 'SASS'],
  npm,
  Git,
  Github,
  REST,
  Responsive Web Design,
  BEM,
  HTML,
}`;

SyntaxHighlighter.registerLanguage('custom', custom);

const Home = ({ theme }) => {
  const codeTheme = theme ? lightTheme : darkTheme;

  return (
    <main className="Home container">
      <article className="article article--primary">
        <p className="article__nickname nadir">haxikowy</p>
        <h1 className="article__name highlight">Szymon Dolnik</h1>
        <p className="article__title">Front-End Developer</p>
      </article>
      <article className="article article--secondary">
        <SyntaxHighlighter language="custom" wrapLongLines style={codeTheme}>
          {skills}
        </SyntaxHighlighter>
      </article>
    </main>
  );
};

export default Home;
