import './scss/App.scss';
import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route, __RouterContext } from 'react-router';
import { useTransition, animated } from 'react-spring';

import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Work from './Work';
import About from './About';
import Contact from './Contact';

const App = () => {
  const [theme, setTheme] = useState(false);

  const { location } = useContext(__RouterContext).history

  const transition = useTransition(location.pathname, {
    from: {position: 'absolute', opacity: 0, x: 400},
    enter: {position: 'static', opacity: 1, x: 0},
    leave: {position: 'absolute', opacity: 0, x: -400},
  })

  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: light)').matches);
  }, []);

  const currentTheme = theme ? 'light-theme' : 'dark-theme';

  return (
    <div className={`App ${currentTheme}`}>      
      <Header setTheme={setTheme} theme={theme} />
      {transition((style) => (<animated.div style={style}>   
        <Switch>
          <Route path="/" exact>
            <Home theme={theme} />
          </Route>
          <Route path="/work/:project" exact component={Work} />
          <Route path="/about" exact>
            <About theme={theme} />
          </Route>
          <Route path="/contact" exact component={Contact} />
        </Switch>   
      </animated.div>)
      )}
      <Footer />
    </div>
  );
};
export default App;
