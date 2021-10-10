import './scss/App.scss';
import React, { useState, useEffect } from 'react';
import { Router, Switch, Route } from 'react-router';
import history from '../history';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import Work from './Work';
import About from './About';
import Contact from './Contact';

const App = () => {
  const [theme, setTheme] = useState(false);

  useEffect(() => {
    setTheme(window.matchMedia('(prefers-color-scheme: light)').matches);
  }, []);

  const currentTheme = theme ? 'light-theme' : 'dark-theme';

  return (
    <div className={`App ${currentTheme}`}>
      <Router history={history}>
        <Header history={history} setTheme={setTheme} theme={theme} />
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
        <Footer />
      </Router>
    </div>
  );
};
export default App;
